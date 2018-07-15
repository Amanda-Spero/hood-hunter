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

//@route GET api/posts
//@desc get all posts
//access Public
router.route("/")
.post(passport.authenticate('jwt', {session: false}), postsController.createNewPost)
.get(postsController.getAllPosts)

module.exports = router;