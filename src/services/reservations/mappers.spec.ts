import { mapRequestParams } from './mappers'

describe('mappers', () => {
  it('should map request params', () => {
    const params = {
      page: 1,
      perPage: 10,
      sortBy: 'id',
      orderBy: 'asc',
      query: 'test',
      status: 'CONFIRMED',
      shift: 'LUNCH',
      area: 'BAR',
      date: '06.03.2023',
    }

    const mappedParams = mapRequestParams(params)

    expect(mappedParams).toEqual({
      _page: 1,
      _limit: 10,
      _sort: 'id',
      _order: 'asc',
      q: 'test',
      status: 'CONFIRMED',
      shift: 'LUNCH',
      area: 'BAR',
      businessDate: '06.03.2023',
    })
  })
})
