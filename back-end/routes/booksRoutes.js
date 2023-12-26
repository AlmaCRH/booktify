const router = require("express").Router();

const {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");

router.get("/books", getAllBooks);

router.get("/books/:id", getBookById);

router.post("/books", addNewBook);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

module.exports = router