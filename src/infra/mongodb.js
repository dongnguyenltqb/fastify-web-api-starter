const logger = require('./logger')
const MongoClient = require('mongodb').MongoClient
const config = require('../config')
// Connection URL
const url = config.MONGODB_URI

// Database Name
const dbName = config.DB_NAME

// Create a new MongoClient
const client = new MongoClient(url, {
  useUnifiedTopology: true
})

function setupMongoDBConnection() {
  // Use connect method to connect to the Server
  client.connect(function(err) {
    if (err) {
      logger.error(err.message)
      setupMongoDBConnection()
    }
    console.log('Connected successfully to MongoDB server')
  })
}

function getCollection(name) {
  return client.db(dbName).collection(name)
}

module.exports = { setupMongoDBConnection, getCollection }
