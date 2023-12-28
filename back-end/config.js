const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { connect } = require("./database/index");

const connection = async () => {
  const app = express()
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routes/index"));
  await connect();
  app.listen(3002, () => console.log("Server started on port 3002"));
};

module.exports = { connection };
connection();
