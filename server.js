var express = require ("express");
var mongoose = require ("mongoose");
var bodyParser = require("body-parser")
var Neighborhoods = require ("./neighbormodel")
var app = express();

app.use (bodyParser.json())
app.use (bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://hood:hunter4@ds121331.mlab.com:21331/hoodhunterproj");
app.use(express.static("./client/build"));

app.post("/add-saved-neighborhood", function(req, res){
    const neighborhood = new Neighborhoods (req.body)
    neighborhood.save().then(function(result){
        res.json(result);
    })
})

app.get("/saved", function(req, res){
    Neighborhoods.find()
    .exec()
    .then(function(doc){
        res.send(doc)
    })
})

app.listen(3000);