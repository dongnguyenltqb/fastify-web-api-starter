const { Client } = require('@elastic/elasticsearch')
const config = require('../config')

let uri = config.ELASTICSEARCH_URI

const client = new Client({ node: uri })

async function getElasticInfo() {
  let i = await client.info()
  console.log(i.body)
}

module.exports = { client, getElasticInfo }
