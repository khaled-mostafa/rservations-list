import { useState } from 'react'

type OrderByType = 'asc' | 'desc'

export interface TableQueryProps {
  page: number
  perPage: number
  sortBy: string
  orderBy: OrderByType
}

/**
 * This is the custom hook for using table query
 * @param {TableQueryProps} initialOptions - initial options for the table query
 * @returns {[TableQueryProps, (options: TableQueryProps) => void]} - the options and the update options function
 */
const useTableQuery = (
  initialOptions: TableQueryProps
): [TableQueryProps, (options: TableQueryProps) => void] => {
  const [options, setOptions] = useState(initialOptions)

  const updateOptions = (newOptions: TableQueryProps) => {
    setOptions({ ...options, ...newOptions })
  }

  return [options, updateOptions]
}

export default useTableQuery
