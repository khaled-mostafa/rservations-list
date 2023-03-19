import { useCallback, useState } from 'react'
import { statusOptions, shiftOptions, areaOptions } from '../constants'
import useFetchReservationList from './useFetchReservationList'
import useTableQuery from '~/common-hooks/useTableQuery'

const useList = () => {
  const [status, setStatus] = useState<string>('')
  const [shift, setShift] = useState<string>('')
  const [area, setArea] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [date, setDate] = useState<Date | null>(null)
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  const [tableQuery, setTableQuery] = useTableQuery({
    page: 1,
    perPage: 10,
    sortBy: 'id',
    orderBy: 'asc',
  })

  const { list, numRecords, loading } = useFetchReservationList({
    tableQuery,
    filters: {
      status,
      shift,
      area,
      searchQuery,
      date,
    },
    setOpenSnackbar,
  })

  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false)
  }, [])

  const handlePage = useCallback((newPage: number) => {
    setTableQuery({ ...tableQuery, page: newPage })
  }, [])

  const handleNumRows = useCallback((newPerPage: number) => {
    setTableQuery({ ...tableQuery, page: 1, perPage: newPerPage })
  }, [])

  const handleOrderBy = useCallback(
    (newOrderBy: 'asc' | 'desc', newSortBy: string) => {
      setTableQuery({ ...tableQuery, orderBy: newOrderBy, sortBy: newSortBy })
    },
    []
  )

  const handleSearchQuery = useCallback((newSearchQuery: string) => {
    setSearchQuery(newSearchQuery)
  }, [])

  const handleDate = useCallback((newDate: Date | null) => {
    setDate(newDate)
  }, [])

  const handleStatus = useCallback((newFilter: string) => {
    setStatus(newFilter)
  }, [])

  const handleShift = useCallback((newFilter: string) => {
    setShift(newFilter)
  }, [])

  const handleArea = useCallback((newFilter: string) => {
    setArea(newFilter)
  }, [])

  const filtersOptions: any = {
    status: {
      label: 'Status',
      options: statusOptions,
      onChange: handleStatus,
      totalCount: numRecords,
      selectedOption: status,
      refKey: 'value',
    },
    shifts: {
      label: 'Shift',
      options: shiftOptions,
      onChange: handleShift,
      totalCount: numRecords,
      selectedOption: shift,
      refKey: 'value',
    },
    areas: {
      label: 'Area',
      options: areaOptions,
      onChange: handleArea,
      totalCount: numRecords,
      selectedOption: area,
      refKey: 'value',
    },
  }

  const clearFilters = () => {
    setStatus('')
    setShift('')
    setArea('')
    setSearchQuery('')
    setDate(null)
  }

  return {
    list,
    loading,
    clearFilters,
    filters: {
      status,
      shift,
      area,
      searchQuery,
      date,
    },
    numRecords,
    handleSearchQuery,
    handlePage,
    handleNumRows,
    handleOrderBy,
    handleDate,
    tableQuery,
    filtersOptions,
    openSnackbar,
    handleCloseSnackbar,
  }
}

export default useList
