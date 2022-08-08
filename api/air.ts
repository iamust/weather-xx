import { VercelRequest, VercelResponse } from '@vercel/node'
import { keyAuth, airNow } from '@tossdev/weather'
import statuses from 'statuses'

async function handler(request: VercelRequest, response: VercelResponse) {
  const { location } = request.query
  const airData: any = await airNow({ location })

  return airData.pm25
    ? response.json(airData)
    : response.status(404).json({ message: statuses(404) })
}

export default keyAuth(handler)
