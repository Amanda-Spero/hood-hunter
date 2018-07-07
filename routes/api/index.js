const router = require("express").Router();
const usersRoutes = require("./users");

// Article routes
router.use("/users", usersRoutes);

module.exports = router;
