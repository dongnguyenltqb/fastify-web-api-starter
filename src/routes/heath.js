var logger = require('../infra/logger')

module.exports = async fastify => {
  fastify.get('/check', async (req, res) => {
    logger.info('Check health request')
    logger.error('Test error')
    return {
      status: true,
      message: 'Welcome to Out API'
    }
  })
}

module.exports.autoPrefix = '/health'
