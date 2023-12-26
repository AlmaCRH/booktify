const { User, User } = require("../models/users");

async function getAllUsers(req, res) {
  try {
    const allUsers = await User.find();
    if (allUsers.length != 0) {
      return res.status(200).json(allUsers);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200), json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function addNewUser(req, res) {
  try {
    const newUser = new User({ ...req.body });
    const insertedUser = await newUser.save();
    if (newUser) {
      return res.status(200).json(insertedUser);
    } else {
      return res.status(404).send("Cannot create User");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedUser) {
      return res.status(200).json(updatedUser);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deletedUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      return res.status(200).json(deletedUser);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    updateUser,
    deletedUser
}