const statuses = require('statuses')
const air = require('../lib/air')
const verify = require('../lib/utils/verify')

module.exports = async (request, response) => {
  const { token, location } = request.query

  if (!verify({ token, location })) {
    return response.status(403).json({
      message: statuses(403)
    })
  }

  const airData = await air.current({ location })

  return airData.pm25
    ? response.json(airData)
    : response.status(404).json({
      message: statuses(404)
    })
}
