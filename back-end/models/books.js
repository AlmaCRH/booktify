const mongoose = require("mongoose");

//Let's create a mongoose schema based on the properties of ours books
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
    type: String,
    required: true,
    maxLength: 10,
    unique: true,
  },
});

//Now, we create a Book model based on our schema and export it
const Book = mongoose.model("Book", BookSchema);

module.exports = { Book };
