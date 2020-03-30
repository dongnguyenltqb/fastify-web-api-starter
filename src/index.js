// Require the framework and instantiate it
const Fastify = require('fastify')
const uuidv4 = require('uuid/v4')
const path = require('path')
const Autoload = require('fastify-autoload')
const Ajv = require('ajv')
const config = require('./config')
const { ObjectId } = require('mongodb')
const { setupMongoDBConnection, getCollection } = require('./infra/mongodb')
const { getElasticInfo } = require('./infra/elasticsearch')
const { jwtDecode } = require('./utils/jwt')
// setup infra
setupMongoDBConnection()
getElasticInfo()

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

server.decorate('authenticated', async (req, res) => {
  try {
    let token = req.headers['x-auth-token'].replace('Bearer ', '')
    req.user = jwtDecode(token)
  } catch (err) {
    res.code(401)
    res.send({
      status: false,
      message: 'Unauthenticated'
    })
  }
})

server.decorate('isRootAdmin', async (req, res) => {
  let adminUsers = getCollection('adminUsers')
  let _id = req.user._id
  try {
    let admin = await adminUsers.findOne({
      _id: new ObjectId(_id)
    })
    if (!admin) {
      res.code(401)
      res.send({
        status: false,
        err: 'root admin only...'
      })
    }
  } catch (err) {
    res.code(400)
    res.send({
      status: false,
      err: err.message
    })
  }
})

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
