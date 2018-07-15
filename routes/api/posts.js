const express = require('express');
const router = express.Router();
const postsController = require("../../controllers/postsController");
const passport = require("passport");

// @route GET api/posts/tet
// @desc Tests post route
//@acces Public
router.route("/test")
.get(postsController.test);

//@route POST api/posts
//@desc Create post
//@access Private
router.route("/")
.post(passport.authenticate('jwt', {session: false}), postsController.createNewPost);

module.exports = router;