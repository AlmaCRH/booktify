const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/booktify");
    console.log("Connected to Mongo!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = {connect};
