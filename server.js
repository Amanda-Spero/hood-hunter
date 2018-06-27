var express = require ("express");
var mongoose = require ("mongoose");
var app = express();

mongoose.connect("mongodb://hood:hunter4@ds121331.mlab.com:21331/hoodhunterproj");
app.use(express.static("./client/build"));
app.listen(3000);