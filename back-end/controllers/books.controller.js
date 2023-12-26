const { Book } = require("../models/books");

async function getAllBooks(req, res) {
  try {
    const allBooks = await Book.find();
    if (allBooks.length != 0) {
      return res.status(200).json(allBooks);
    } else {
      return res
        .status(404)
        .json("It seems that the books are hiding, look at another time");
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
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedBook) {
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
      return res.status(200).json(deletedBook + "was deleted");
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
