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

//@route GET api/posts/:id
//@desc get a specific post by id
//access public

//@route DELETE api/posts/:id
//@desc deletes a post by post id
//@access private
router.route("/:id")
.get(postsController.getPostById)
.delete(passport.authenticate('jwt', {session: false}), postsController.deletePostById)

//@route POST api/posts/comment/:id
//@desc comment on a post
//@desc Private
router.route("/comment/:id")
.post(passport.authenticate('jwt', {session: false}), postsController.addCommentToPost)



module.exports = router;