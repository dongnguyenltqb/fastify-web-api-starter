const { Client } = require('@elastic/elasticsearch')
const config = require('../config')
const logger = require('./logger')

let uri = config.ELASTICSEARCH_URI

const client = new Client({ node: uri })

var wait = x =>
  new Promise(solved => {
    setTimeout(() => solved(), x)
  })

async function getElasticInfo() {
  try {
    let i = await client.info()
    logger.info(i.body)
  } catch (err) {
    logger.error(err.message)
    logger.info('retry to connect to elasticsearch')
    await wait(1000)
    await getElasticInfo()
  }
}

module.exports = { client, getElasticInfo }
