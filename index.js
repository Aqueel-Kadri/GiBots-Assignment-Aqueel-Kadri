const express = require("express");
const { urlencoded } = require("express");
const rootRouter = require("./routes");

const app = express();

app.use(urlencoded({ extended: true })); //server
app.use(express.json());

app.use("/api", rootRouter);

const port = 9000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
