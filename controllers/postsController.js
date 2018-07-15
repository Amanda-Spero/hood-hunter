const db = require("../models");
const Post = db.Post;
const User = db.User;
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
    },
    getAllPosts: (req, res) => {
        Post.find({})
        .then((posts) => res.json(posts))
        .catch((err) => res.status(422).json({message: "no posts found"}))
    },
    getPostById: (req, res) => {
        Post.findById(req.params.id)
        .then((post) => res.json(post))
        .catch((err) => res.status(422).json({message: "no post found"}))
    },
    deletePostById: (req, res) => {
        User.findById(req.user.id)
        .then((user) => {
            Post.findById(req.params.id)
            .then((post) => {
                if(post.user.toString() !== req.user.id) {
                    return res.status(401).json({notauth: "User not authorized"})
                }
                //
                post.remove().then(() => res.json({success: true}))
                .catch((err) => res.status(400).json({message: "no post found"}))
            })
        })
    },
    addCommentToPost: (req, res) => {
        const {isValid, errors} = validatePostInput(req.body)
        if(!isValid) {
            return res.status(400).json(errors);
        }
        Post.findById(req.params.id)
        .then((post) => {
            const newComment = {
                text: req.body.text,
                name: req.body.name,
                user: req.user.id
            }
            post.comments.unshift(newComment)
            post.save().then((post) => res.json(post))
        })
        .catch((err) => res.status(400).json(err))
    }
}