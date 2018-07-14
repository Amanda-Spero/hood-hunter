const db = require("../models");
const User = db.User;
const SearchHistory = db.SearchHistory;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
//Load Input Validation Rules
const validateRegisterInput = require("../validation/register")
const validateLoginInput = require("../validation/login");
module.exports = {
    login: (req, res) => {
        //Validate form
        const {errors, isValid} = validateLoginInput(req.body);
        if(!isValid) {
            return res.status(400).json(errors)
        }
        const { email, password } = req.body;
        //Find the user by email
        User.findOne({ email })
        .then((user) => {
            if (!user) {
                errors.email = "User not found"
                res.status(404).json(errors)
            } else {
                //Check password
                bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if (isMatch) {
                        //User Matched
                        //jwt payload
                        const payload = { id: user._id, name: user.name }
                        //Sign the token - put secret key in .env file.
                        jwt.sign(payload, keys.secretKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({ success: true, token: `Bearer ${token}` })
                        })
                    } else {
                        errors.password = "Password incorrect"
                        res.status(400).json(errors)
                    }
                })
            }
        })
    },
    register: (req, res) => {
        const {errors, isValid} = validateRegisterInput(req.body);
        //check validation
        if(!isValid) {
            return res.status(400).json(errors)
        }
        User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                errors.email = "Email already exists"
                res.status(400).json(errors)
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                            throw err;
                        }
                        newUser.password = hash;
                        newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                    })
                })
            }
        })
        .catch(err => console.log(err));
    },
    currentUser: (req, res) => {
        res.json({id: req.user.id,name: req.user.name, email: req.user.email})
    },
    getSearchHistory: (req, res) => {
        SearchHistory.find({user_id: req.params.id})
        .then((history) => {
            res.json(history)
        }).catch(err => res.status(422).json(err))
    },
    addSearchHistory: (req, res) => {
        SearchHistory.create(req.body)
        .then((history) => {
            res.json(history)
        }).catch(err => res.status(422).json(err))
    }
}