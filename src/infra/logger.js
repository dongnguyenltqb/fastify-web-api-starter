const pino = require('pino')

const logger = pino({
  prettyPrint: true,
  colorize: true
})

module.exports = logger
