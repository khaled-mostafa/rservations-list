// Mock handler for the reservations endpoint. Returns a 200 response with the
// mock data in the body and a header with the total number of reservations.

import { rest } from 'msw'
import * as response from '../../../../mock_data/db.json'
import { api } from '~/services/api'
import { endpoints } from '~/services/reservations'

const apiUrl = `${api.reservations.defaults.baseURL}${endpoints.reservations}`

export const handlers = [
  rest.get(apiUrl, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json(response),
      ctx.set('x-total-count', String(response.reservations?.length))
    )
  ),
]
