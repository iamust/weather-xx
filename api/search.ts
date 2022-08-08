import { VercelRequest, VercelResponse } from '@vercel/node'
import { keyAuth, city } from '@tossdev/weather'

async function handler(request: VercelRequest, response: VercelResponse) {
  const { location } = request.query
  const divisions = await city.lookup({ location })

  return response.json(divisions)
}

export default keyAuth(handler)
