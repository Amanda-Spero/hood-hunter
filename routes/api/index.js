
const router = require("express").Router();
//const hunterRoutes = require("./HoodHunter");

const usersRoutes = require("./users");

//Hood Hunter routes
//router.use("/HoodHunter", hunterRoutes);

//user authentication routes
router.use("/users", usersRoutes);

module.exports = router;

