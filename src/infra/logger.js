const pino = require('pino')

const logger = pino({
  prettyPrint: true,
  file: 'fastify-runtime.log'
})

module.exports = logger
