import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useEffect } from 'react'
import dayjs from 'dayjs'
import useDebounce from '~/common-hooks/useDebounce'
import { useStateSafe } from '~/common-hooks/useStateSafe'
import { getReservations } from '~/services/reservations'

interface UseFetchReservationListProps {
  tableQuery: {
    page: number
    perPage: number
    sortBy: string
    orderBy: 'asc' | 'desc'
  }
  filters: {
    status: string
    shift: string
    area: string
    searchQuery: string
    date: any
  }
  setOpenSnackbar: Dispatch<SetStateAction<boolean>>
}

const useFetchReservationList = ({
  tableQuery,
  filters,
  setOpenSnackbar,
}: UseFetchReservationListProps) => {
  const [list, setList] = useStateSafe<Array<any>>([])
  const [numRecords, setNumRecords] = useStateSafe<number>(0)
  const [loading, setLoading] = useStateSafe<boolean>(false)

  const debouncedSearchQuery = useDebounce(filters.searchQuery, 500) || ''

  const fetchReservationsList = useCallback(async () => {
    setLoading(true)
    try {
      const { list: data, pagination } = await getReservations({
        page: tableQuery.page,
        perPage: tableQuery.perPage,
        sortBy: tableQuery.sortBy,
        orderBy: tableQuery.orderBy,
        status: filters.status,
        shift: filters.shift,
        area: filters.area,
        query: debouncedSearchQuery.trim(),
        date: filters.date
          ? dayjs(filters.date).format('DD.MM.YYYY')
          : undefined,
      })
      setList(data)
      setNumRecords(pagination.totalRecords)
    } catch (error) {
      console.error(error)
      setOpenSnackbar(true)
    } finally {
      setLoading(false)
    }
  }, [
    tableQuery.page,
    tableQuery.perPage,
    tableQuery.sortBy,
    tableQuery.orderBy,
    filters.status,
    filters.shift,
    filters.area,
    filters.date,
    debouncedSearchQuery,
  ])

  useEffect(() => {
    fetchReservationsList()
  }, [fetchReservationsList])

  return { list, numRecords, loading, fetchReservationsList }
}

export default useFetchReservationList
