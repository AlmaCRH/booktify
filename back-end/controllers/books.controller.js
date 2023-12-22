const { Book } = require("../models/books");

async function getAllBooks(req, res) {
  try {
    const allBooks = await Book.find();
    if (allBooks) {
      return res.status(200).json(allBooks);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getBookById(req, res) {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(404).send("Book not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postNewBook(req, res) {
  try {
    const newBook = new Book({ ...req.body });
    const insertedBook = await newBook.save();
    if (newBook) {
      return res.status(200).json(insertedBook);
    } else {
      return res.status(404).send("Cannot add book");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateBook(req, res) {
  try {
    const { id } = req.params;
    await Book.updateOne({ id }, req.body);
    const updatedBook = await Book.findById(id);
    if (updateBook) {
      return res.status(200).json(updatedBook);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteBook(req, res) {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (deletedBook) {
      return res.status(200).json(deletedBook);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  postNewBook,
  updateBook,
  deleteBook,
};
