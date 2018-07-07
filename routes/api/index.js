<<<<<<< HEAD
const router = require("express").Router();
const usersRoutes = require("./users");

// Article routes
router.use("/users", usersRoutes);

module.exports = router;
=======

const router = require("express").Router();
//const hunterRoutes = require("./HoodHunter");

const usersRoutes = require("./users");

//Hood Hunter routes
//router.use("/HoodHunter", hunterRoutes);

//user authentication routes
router.use("/users", usersRoutes);

module.exports = router;

>>>>>>> 4609ea612f11308097b5ad62c873a8c513fbd471
