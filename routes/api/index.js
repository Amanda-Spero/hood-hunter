
const router = require("express").Router();
//const hunterRoutes = require("./HoodHunter");

const usersRoutes = require("./users");

const postRoutes = require("./posts");
//Hood Hunter routes
//router.use("/HoodHunter", hunterRoutes);

//user authentication routes
router.use("/users", usersRoutes);

module.exports = router;

