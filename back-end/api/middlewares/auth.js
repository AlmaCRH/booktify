const jwt = require("jsonwebtoken");
const {User} = require("../models/users");

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).send("Token not found");
  }

  jwt.verify(token, "secret", async (error, payload) => {
    if (error) {
      console.error(error);
      return res.status(401).send("Invalid token");
    }

    try {
      const user = await User.findOne({ email: payload.email });
console.log('e')
      if (!user) {
        return res.status(401).send("User not found");
      }

      res.locals.user = user;
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal server error");
    }
  });
};

const checkAdmin = (req, res, next) => {
  if (res.locals.user.role === "admin") {
    next();
  } else {
    return res.status(403).send("You are not allowed to take this action");
  }
};

module.exports = { checkAuth, checkAdmin };
