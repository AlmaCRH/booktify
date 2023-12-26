const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use("/api", require("./routes/index"));

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookApp");
    console.log("Connected to Mongo!");
    app.listen(3013, () => console.log("Server started on port 3012"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { app };

start();
