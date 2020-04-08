var logger = require('../infra/logger')

async function sample() {
  logger.info("it's just a service")
  return {
    message: 'a simple service'
  }
}

module.exports = { sample }
