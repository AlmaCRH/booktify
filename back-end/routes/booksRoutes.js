const router = require("express").Router();

const {
  getAllBooks,
  getBookById,
  postNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");

router.get("/books", getAllBooks);

router.get("/books/:id", getBookById);

router.post("/books", postNewBook);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);
