const router = require("express").Router();

const {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post("/", addNewBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
