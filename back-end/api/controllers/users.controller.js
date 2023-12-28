const { Book } = require("../models/books");
const { User } = require("../models/users");

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
      return res.status(200).json(user);
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

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      return res.status(200).json({message: "User deleted",deletedUser});
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function addLog(req, res) {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    const user = await User.findById(id);
    const book = await Book.findOne({ title });

    if (user && book) {
      const checkIfLogExist = user.log.find((entry) =>
        entry.bookId.equals(book._id)
      );
      if (!checkIfLogExist) {
        user.log.push({ bookId: book._id, status: status });
        const savedUser = await user.save();
        return res.status(200).json(savedUser);
      } else {
        return res.status(400).send("That book is already on your log!");
      }
    } else {
      return res.status(404).send("User or book not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateLogStatus(req, res) {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    const filter = { title: title };
    const user = await User.findById(id);
    const book = await Book.findOne(filter);
    const logEntry = user.log.find((entry) => entry.bookId.equals(book._id));
    if (logEntry) {
      logEntry.status = status;
      await user.save();
      return res.status(200).json(user);
    } else {
      return res.status(400).send("User or book not found, cannot update");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateMyAccount(req, res) {
  try {
    if (req.body.role === "admin") {
      return res.status(401).send("You can't do that, friend");
    }
    const user = await User.findByIdAndUpdate(res.locals.user._id, req.body, {
      new: true,
    });
    if (user) {
      return res.status(200).json({ message: "User updated" });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

async function deleteMyAccount(req, res) {
  try {
    console.log(res);
    const user = await User.findByIdAndDelete(res.locals.user._id);
    if (user) {
      return res.status(200).json("User deleted, see ya!");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  deleteUser,
  addLog,
  updateLogStatus,
  updateMyAccount,
  deleteMyAccount,
};
