const express = require("express");
const router = express.Router()
const usersController = require("../../controllers/usersController");
const passport = require("passport");

//route - POST api/users/register
//desc - route for registering new users
//access public
router.route("/register")
.post(usersController.register)

//route - POST api/users/login/
//desc - Login User / Returning JWT Token
//access - Public
router.route("/login")
.post(usersController.login)

//route GET api/users/currentuser
//desc - return current user
//access - private
router.route("/currentuser")
.get(passport.authenticate('jwt', {session: false}), usersController.currentUser)

//route POST api/users/history
//desc - add to user search history
//access - public
router.route("/history")
.post(usersController.addSearchHistory)

//route GET api/users/history/:id
//desc - retrieve search history
//access - private
router.route("/history/:id")
.get(passport.authenticate('jwt', {session: false}), usersController.getSearchHistory)

module.exports = router;