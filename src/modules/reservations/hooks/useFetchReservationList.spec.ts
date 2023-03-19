import { renderHook } from '@testing-library/react-hooks'
import { setupServer } from 'msw/node'
import * as response from '../../../../mock_data/db.json'
import useFetchReservationList from './useFetchReservationList'
import { handlers } from '~/modules/reservations/apiTestHandlers'

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('useFetchReservationList', () => {
  const tableQuery: any = {
    page: 1,
    perPage: 10,
    sortBy: 'name',
    orderBy: 'asc',
  }

  const filters = {
    status: 'CONFIRMED',
    shift: 'LUNCH',
    area: 'BAR',
    searchQuery: '',
    date: null,
  }

  it('should fetch reservation list', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchReservationList({
        tableQuery,
        filters,
        setOpenSnackbar: jest.fn(),
      })
    )

    // The initial state is empty
    expect(result.current.list).toEqual([])
    expect(result.current.numRecords).toEqual(0)

    // Wait for the async call to complete
    await waitForNextUpdate()

    // The list should be populated with the mock data
    expect(result.current.list).toEqual(response)
    expect(result.current.numRecords).toEqual('20')
  })
})
