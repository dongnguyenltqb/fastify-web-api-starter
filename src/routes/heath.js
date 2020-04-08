var { checkHealth } = require('../controllers/health')

module.exports = async fastify => {
  fastify.get('/check', checkHealth)
}

module.exports.autoPrefix = '/health'
