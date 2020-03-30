var logger = require('../infra/logger')

async function checkHealth(req, res) {
  logger.info('checkHealth request...')
  return {
    status: true,
    message: 'Everything is fine'
  }
}

module.exports = { checkHealth }
