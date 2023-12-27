const router = require("express").Router();

router.use("/books", require("./books.route"));
router.use("/users", require("./users.route"));

router.use("/auth", require("./auth.route"));

module.exports = router