const express = require ("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

app.use (bodyParser.json())
app.use (bodyParser.urlencoded({extended: true}))

//mongoose.connect("mongodb://hood:hunter4@ds121331.mlab.com:21331/hoodhunterproj");
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

/* app.post("/add-saved-neighborhood", function(req, res){
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
}) */
app.use(passport.initialize())

// Passport Config
require('./config/passport.js')(passport)

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://crystal:WowNoU89!@ds125031.mlab.com:25031/logindemopj3")
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})