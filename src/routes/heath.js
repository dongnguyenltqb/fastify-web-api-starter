module.exports = async fastify => {
  fastify.get('/check', async (req, res) => {
    return {
      status: true,
      message: 'Welcome to Out API'
    }
  })
}

module.exports.autoPrefix = '/health'
