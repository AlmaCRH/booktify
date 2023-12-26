const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  deleteUser,
  addLog,
  updateStatus
} = require("../controllers/users.controller");

//User
router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/", addNewUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);


//Log
router.post("/:id/log", addLog)
router.put("/:id/log", updateStatus)

module.exports = router