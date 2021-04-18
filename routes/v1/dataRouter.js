const express = require("express");
const DataController = require("../../controllers/dataController");
const dataRouter = express.Router();

const dataController = new DataController();

//making a get request to get sorted age
dataRouter.get("/get_sorted_age", dataController.findSortedAge);

//making a get request to get sum
dataRouter.get("/get_sum", dataController.findSum);

//to insert data into database
dataRouter.post("/insert_data", dataController.insertDataIntoDB);

module.exports = dataRouter;
