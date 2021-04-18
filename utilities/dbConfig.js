const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost/node_assignment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on("error", (err) => {
  console.log("error!! Connection failed");
});
module.exports = connection;
