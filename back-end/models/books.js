const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  hardcover: {
    type: String,
    required: true,
  },
  ISBN10: {
    type: Number,
    required: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = { Book };
