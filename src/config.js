const dotenv = require('dotenv')
dotenv.config()

const env = process.env.NODE_ENV || 'dev'
const config = {
  //LOCAL =========================================================================
  local: {
    PORT: 3001,
    JWT_SECRET:
      'aBW8uMfBLwcwV29faa7zNpVRUDKZ2m5KbqF3gktnQFYUuzXjgk9sLU48HjdJ8fCmY2a9HQ',
    FE_DOMAIN: 'http://localhost:3000',
    MONGODB_URI: 'mongodb://localhost',
    DB_NAME: 'test',
    ELASTICSEARCH_URI: 'http://localhost:9200',
    LOG_LEVEL: 'info',
    CORS: 'http://localhost:3000',
    SENDGRID_API_KEY: 'some key',
    SYSTEM_MAIL: 'alo.noreply@gmail.com',
    EMAIL_TEMPLATE: 'dev'
  }
}

module.exports = config[env]
