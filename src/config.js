const dotenv = require('dotenv')
dotenv.config()

const env = process.env.NODE_ENV || 'local'
const config = {
  //LOCAL =========================================================================
  local: {
    PORT: 3001,
    JWT_SECRET:
      'aBW8uMfBLwcwV29faa7zNpVRUDKZ2m5KbqF3gktnQFYUuzXjgk9sLU48HjdJ8fCmY2a9HQ',
    FE_DOMAIN: 'http://localhost:3000',
    MONGODB_URI: 'mongodb://docker:123456@localhost:27027/bar?authSource=bar',
    DB_NAME: 'bar',
    ELASTICSEARCH_URI: 'http://localhost:9292',
    LOG_LEVEL: 'info',
    CORS: 'http://localhost:3000',
    SENDGRID_API_KEY: 'some key',
    SYSTEM_MAIL: 'alo.noreply@gmail.com',
    EMAIL_TEMPLATE: 'dev'
  },
  dev: {
    PORT: 3001,
    JWT_SECRET:
      'aBW8uMfBLwcwV29faa7zNpVRUDKZ2m5KbqF3gktnQFYUuzXjgk9sLU48HjdJ8fCmY2a9HQ',
    FE_DOMAIN: 'http://localhost:3000',
    MONGODB_URI:
      'mongodb://root:123456@mongodb-1-servers-vm-1,mongodb-1-servers-vm-0/bar?readPreference=primaryPreferred&replicaSet=rs0&authSource=admin',
    DB_NAME: 'bar',
    ELASTICSEARCH_URI: 'http://elastic_hihi:9200',
    LOG_LEVEL: 'info',
    CORS: 'http://localhost:3000',
    SENDGRID_API_KEY: 'some key',
    SYSTEM_MAIL: 'alo.noreply@gmail.com',
    EMAIL_TEMPLATE: 'dev'
  }
}

module.exports = config[env]
