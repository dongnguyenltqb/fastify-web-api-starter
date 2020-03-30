const pino = require('pino')

const logger = pino({
  prettyPrint: {
    errorProps: 'hint, detail',
    crlf: true,
    colorize: true
  }
})

module.exports = logger
