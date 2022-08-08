const statuses = require('statuses')
const darksky = require('../lib/darksky')
const verify = require('../lib/utils/verify')

module.exports = async (request, response) => {
  const { token, location } = request.query

  if (!verify({ token, location })) {
    return response.status(403).json({
      message: statuses(403)
    })
  }

  try {
    const forecastData = await darksky.forecast({ location })

    return response.json(forecastData)
  } catch ({ message }) {
    return response.status(403).json({ message })
  }
}
