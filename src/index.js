// Require the framework and instantiate it
const Fastify = require('fastify')
const uuidv4 = require('uuid/v4')
const path = require('path')
const Autoload = require('fastify-autoload')
const Ajv = require('ajv')
const config = require('./config')
const { setupMongoDBConnection } = require('./infra/mongodb')
const { getElasticInfo } = require('./infra/elasticsearch')
const { decorateJwtUtilOnFastify } = require('./utils/jwt')

// setup infra
//setupMongoDBConnection()
// getElasticInfo()

const server = Fastify({
  ignoreTrailingSlash: true,
  genReqId: () => uuidv4(),
  logger: {
    level: config.LOG_LEVEL || 'error',
    prettifier: require('pino-pretty'),
    prettyPrint: {
      errorProps: 'hint, detail',
      crlf: true,
      colorize: true
    },
    serializers: {
      req(req) {
        return {
          method: req.method,
          url: req.url,
          headers: req.headers,
          hostname: req.hostname,
          remoteAddress: req.ip,
          remotePort: req.connection.remotePort
        }
      }
    }
  }
})

// config self custom ajv
// then replace the default one in fastify
// =================================================
const ajv = new Ajv({
  // the fastify defaults (if needed)
  removeAdditional: true,
  useDefaults: true,
  coerceTypes: true,
  allErrors: true,
  nullable: true
  // any other options
  // ...
})

server.setSchemaCompiler(function(schema) {
  return ajv.compile(schema)
})
// =================================================

server.register(require('fastify-helmet'))
// server.register(require('fastify-cookie'))

server.register(require('fastify-jwt'), {
  secret: config.JWT_SECRET
})

// Decorate
decorateJwtUtilOnFastify(server)

server.register(require('fastify-cors'), {
  origin: config.CORS
})

server.register(Autoload, {
  dir: path.join(__dirname, 'routes'),
  options: { prefix: '' }
})

// Run the server!
const start = async () => {
  try {
    await server.listen(config.PORT, '0.0.0.0')
    server.ready(err => {
      if (err) throw err
    })
  } catch (err) {
    server.log.error(err)
  }
}
start()
