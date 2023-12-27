const router = require("express").Router();

const {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");

const {checkAdmin, checkAuth} = require("../middlewares/auth")

//Users
router.get("/", getAllBooks);

router.get("/:id", getBookById);


//Admins
router.post("/", checkAuth, checkAdmin, addNewBook);

router.put("/:id", checkAuth, checkAdmin, updateBook);

router.delete("/:id", checkAuth, checkAdmin, deleteBook);

module.exports = router;
