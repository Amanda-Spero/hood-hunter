const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/post');

//Validation
const validatePostInput = require('../../validation/post');

// @route GET api/posts/tet
// @desc Tests post route
// @acces Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works'}));

// @route POST api/posts
// @desc Create post
// @access Private
router.post('/', passport.authenticate('jwt', {session:false}), (req,res) => {
  const { errors, isValid} = validatePostInput(req.body);

  //check validation
  if(!isValid) {
    //if any errors, send 400 with erorrs object
    return res.status(400).json(errors);
  }
  const newPost = Post({
    text: req.body.text,
    name: req.body.name,
    user: req.user.id
  });

  newPost.save().then(post => res.json(post));
});

module.exports = router;