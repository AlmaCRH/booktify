const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  deleteUser,
  addLog,
  updateLogStatus,
  updateMyAccount,
  deleteMyAccount
} = require("../controllers/users.controller");

const {checkAdmin, checkAuth} = require("../middlewares/auth")

//User
router.get("/profile/:id", getUserById);
router.put("/profile/:userId", checkAuth, updateMyAccount);
router.delete("/profile/:id", checkAuth, deleteMyAccount);
router.post("/profile/:id/log", checkAuth, addLog)
router.put("/profile/:id/log",checkAuth, updateLogStatus)


//Admins
router.get("/", checkAuth, checkAdmin, getAllUsers);
router.post("/", checkAuth, checkAdmin, addNewUser);
router.delete("/:id", checkAuth, checkAdmin, deleteUser);
router.put("/:id", checkAuth, checkAdmin, updateUser);

module.exports = router