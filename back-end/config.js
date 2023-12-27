const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { connect } = require("./database/index");

const connection = async () => {
  const app = express()
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routes/index"))
    .listen(3002, () => console.log("Server started on port 3002"));
  await connect();
};

/* const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookApp");
    console.log("Connected to Mongo!");
    app.listen(3013, () => console.log("Server started on port 3012"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
 */

module.exports = {connection}
connection();
