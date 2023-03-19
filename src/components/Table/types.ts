export enum ColumnType {
  Text,
  Chip,
}

export interface Mapper<T> {
  key: T
  value: string
}

export interface Column {
  id: string
  label: string
  sortable: boolean
  type: ColumnType
  align?: 'right'
  format?: any
  colorMapper?: Mapper<any>[]
}

export interface Props<T> {
  columns: Column[]
  rows: T[]
  page: number
  perPage: number
  totalNumRows: number
  orderBy: 'asc' | 'desc'
  sortBy: string
  loading: boolean
  rowsPerPageOptions?: number[]
  disablePagination?: boolean
  noResultsTitle?: string
  noResultsDescription?: string
  hasClearFilter?: boolean
  clearFilters?: () => void
  onPageChange: (page: number) => void
  onNumRowsChange: (numRows: number) => void
  onOrderChange: (order: 'asc' | 'desc', orderBy: string) => void
}
