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
      return
    }
    console.log('Connected successfully to MongoDB server')
    testWriteMongoDb()
  })
}

function getCollection(name) {
  return client.db(dbName).collection(name)
}

function sleep(x) {
  return new Promise(soved => {
    setTimeout(soved, x)
  })
}

async function testWriteMongoDb() {
  try {
    let logs = getCollection('logs')
    await logs.insertOne({ created_at: Date.now().toString() })
    await sleep(1000)
    testWriteMongoDb()
  } catch (err) {
    logger.error(err)
  }
}

module.exports = { setupMongoDBConnection, getCollection }
