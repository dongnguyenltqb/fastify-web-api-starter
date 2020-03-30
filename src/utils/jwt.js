var jwt = require('jsonwebtoken')
const config = require('../config')

function jwtDecode(token) {
  let secretKey = config.JWT_SECRET
  return jwt.decode(token, secretKey)
}

module.exports = {
  jwtDecode
}
