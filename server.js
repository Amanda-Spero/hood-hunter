const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const keys = require("./config/keys");
const passport = require("passport");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport.js')(passport)

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || keys.devMongoDBURI)
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
