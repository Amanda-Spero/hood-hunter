require('dotenv').config()

module.exports = {
    secretKey: process.env.SECRETKEY,
    devMongoDBURI: process.env.DEV_MONGODB_URI
}