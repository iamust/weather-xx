const statuses = require('statuses')
const city = require('../lib/city')
const verify = require('../lib/utils/verify')

module.exports = async (request, response) => {
  const { token, location } = request.query

  if (!verify({ token, location })) {
    return response.status(403).json({
      message: statuses(403)
    })
  }

  const divisions = await city.lookup(location)
  return response.json(divisions)
}
