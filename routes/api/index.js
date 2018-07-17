
const router = require("express").Router();
//const hunterRoutes = require("./HoodHunter");

const usersRoutes = require("./users");
const postsRoutes = require("./posts");
//Hood Hunter routes
//router.use("/HoodHunter", hunterRoutes);

//user authentication routes
router.use("/users", usersRoutes);
//posts routes
router.use("/posts", postsRoutes)

module.exports = router;

