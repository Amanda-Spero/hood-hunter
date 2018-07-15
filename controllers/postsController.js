const db = require("../models");
const Post = db.Post;
const validatePostInput = require("../validation/post");

module.exports = {
    test: (req, res) => {
        res.json({ msg: 'Posts Works'})
    },
    createNewPost: (req, res) => {
        const { errors, isValid} = validatePostInput(req.body);
        //check validation
        if(!isValid) {
          //if any errors, send 400 with erorrs object
          return res.status(400).json(errors);
        }
        const newPost = new Post({
          text: req.body.text,
          name: req.body.name,
          user: req.user.id
        });
      
        newPost.save().then(post => res.json(post));
    }
}