import * as response from '../../../mock_data/db.json'
import { getReservations } from '.'
import { api } from '~/services/api'

describe('Reservation service', () => {
  it('should return a list of reservations', async () => {
    const mockApiResponse = jest
      .spyOn(api.reservations, 'get')
      .mockImplementationOnce(() =>
        Promise.resolve({
          data: response,
          headers: {
            'x-total-count': response.reservations?.length,
          },
        })
      )

    const result = await getReservations({
      page: 1,
      perPage: 10,
      sortBy: 'asc',
      orderBy: 'all',
    })

    expect(mockApiResponse).toHaveBeenCalledTimes(1)

    expect(mockApiResponse).toHaveBeenCalledWith('reservations', {
      params: {
        _page: 1,
        _limit: 10,
        _sort: 'asc',
        _order: 'all',
        q: undefined,
        status: undefined,
        shift: undefined,
        area: undefined,
        businessDate: undefined,
      },
    })

    expect(result).toEqual({
      list: response,
      pagination: {
        page: 1,
        totalRecords: 20,
      },
    })

    mockApiResponse.mockRestore()
  })
})
