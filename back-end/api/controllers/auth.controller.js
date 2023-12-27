const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/users");

const signUp = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    if (req.body.role === "admin") {
      return res.status(401).send("You can't declare yourself as an admin");
    }
    const user = await User.create(req.body);
    console.log(user)
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Cannot create user");
  }
};

const logIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("Check your email or password");
    }

    bcrypt.compare(req.body.password, user.password, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).send(error);
       
      }
      if (result) {
        const token = jwt.sign({ email: user.email }, "secret", {
          expiresIn: "7h",
        });
        return res.status(200).json({ token });
      } else {
        return res.status(403).send("Empty mail or password");
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

module.exports = { signUp, logIn };
