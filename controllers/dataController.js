const connection = require("../utilities/dbConfig");
const UserModel = require("../model/dataModel");
class DataController {
  constructor() {
    this.data = [
      [
        {
          Name: "Ajinkya",
          Age: "25",
          Marks: "80",
        },
        {
          Name: "Krishna",
          Age: "23",
          Marks: "90",
        },
      ],
      [
        {
          Name: "Ananta",
          Age: "28",
          Marks: "100",
        },
        {
          Name: "Pruthvi",
          Age: "24",
          Marks: "120",
        },
      ],
    ];
  }

  //method for sorting the data by age
  //Since in built sort function is not allowed

  findSortedAge = (req, res) => {
    const tempData = this.data;
    const sortedData = tempData.flat();
    sortedData.forEach((current, index, array) => {
      for (let i = 0; i < array.length - index - 1; i++) {
        if (+array[i].Age > +array[i + 1].Age) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
      }
    });
    res.status(200).json({ sortedData });
  };

  //Sum of Marks
  findSum = (req, res) => {
    const tempData = this.data.flat();
    res.status(200).json(tempData.reduce((acc, val) => acc + +val.Marks, 0));
  };

  //method for inserting data into db

  insertDataIntoDB = async (req, res) => {
    await connection;

    for (const item of this.data) {
      for (const it of item) {
        const result = await UserModel.create({
          name: it.Name,
          age: it.Age,
          marks: it.Marks,
        });
      }
    }

    res.status(200).json({ message: "Success!! added to the database" });
  };
}
module.exports = DataController;
