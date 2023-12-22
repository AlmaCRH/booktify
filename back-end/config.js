const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ message: "Hello world" });
});

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost/bookApp");
    console.log("Connected to Mongo!");
    app.listen(3009, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { app };

start();
