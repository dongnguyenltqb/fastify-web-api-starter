var jwt = require('jsonwebtoken')
const config = require('../config')
const { getCollection } = require('../infra/mongodb')

function jwtDecode(token) {
  let secretKey = config.JWT_SECRET
  return jwt.decode(token, secretKey)
}

function decorateJwtUtilOnFastify(fastify) {
  fastify.decorate('authenticated', async (req, res) => {
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

  fastify.decorate('isRootAdmin', async (req, res) => {
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
}

module.exports = {
  jwtDecode,
  decorateJwtUtilOnFastify
}
