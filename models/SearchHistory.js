const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchHistorySchema = new Schema({
    user_id: {
      type: String,
      required: false
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    searchQuery: {
        type: String,
        required: true
    }
})

const SearchHistory = mongoose.model('search_history', SearchHistorySchema);

module.exports = SearchHistory;

