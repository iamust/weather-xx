import { VercelRequest, VercelResponse } from '@vercel/node'
import weather, { keyAuth } from '@tossdev/weather'

async function handler(request: VercelRequest, response: VercelResponse) {
  const { location } = request.query

  try {
    const forecastData = await weather.forecast({ location })
    return response.json(forecastData)
  } catch ({ message }) {
    return response.status(403).json({ message })
  }
}

export default keyAuth(handler)
