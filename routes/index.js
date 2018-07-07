<<<<<<< HEAD
=======

>>>>>>> 4609ea612f11308097b5ad62c873a8c513fbd471
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;

>>>>>>> 4609ea612f11308097b5ad62c873a8c513fbd471
