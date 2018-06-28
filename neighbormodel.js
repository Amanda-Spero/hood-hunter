var mongoose = require ("mongoose");
var neighborhoodSchema = mongoose.Schema({
    searchQuery: String,
    crimeRates: String,
    foodQuery: String,
    schoolRates: String,
});

module.exports = mongoose.model("Neighborhoods", neighborhoodSchema) 

