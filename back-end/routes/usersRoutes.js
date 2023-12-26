const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.post("/users", addNewUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);
