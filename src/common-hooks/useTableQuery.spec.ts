import { renderHook, act } from '@testing-library/react-hooks'
import useTableQuery, { TableQueryProps } from './useTableQuery'

describe('useTableQuery', () => {
  const initialOptions: TableQueryProps = {
    page: 1,
    perPage: 10,
    sortBy: 'id',
    orderBy: 'asc',
  }

  it('should return initial options', () => {
    const { result } = renderHook(() => useTableQuery(initialOptions))
    expect(result.current[0]).toEqual(initialOptions)
  })

  it('should update options', () => {
    const { result } = renderHook(() => useTableQuery(initialOptions))
    const newOptions: TableQueryProps = {
      page: 2,
      perPage: 20,
      sortBy: 'name',
      orderBy: 'desc',
    }
    act(() => {
      result.current[1](newOptions)
    })
    expect(result.current[0]).toEqual(newOptions)
  })
})
