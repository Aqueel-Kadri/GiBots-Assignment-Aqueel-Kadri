const express = require("express");
const dataRouter = require("./v1/dataRouter");
const rootRouter = express.Router();

rootRouter.use("/v1/", dataRouter);
//404 error for all other requests
rootRouter.all("/*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});
module.exports = rootRouter;
