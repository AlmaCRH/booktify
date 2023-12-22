const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use("/", require("./routes/booksRoutes"));

app.get("/", async (req, res) => {
  return res.json({ message: "Hello world" });
});

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookApp");
    console.log("Connected to Mongo!");
    app.listen(3012, () => console.log("Server started on port 3012"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { app };

start();
