import React, { ChangeEvent } from 'react'
import {
  Table,
  TableBody,
  TablePagination,
  Box,
  Skeleton,
  useTheme,
} from '@mui/material'
import {
  TableChip,
  TableCell,
  TableSortLabel,
  TableRow,
  TableBox,
  TableContainer,
  TableHead,
} from './styles'
import NoResults from '~/components/NoResults'
import { Column, ColumnType, Mapper, Props } from '~/components/Table/types'
import { ReactComponent as NoResultsImage } from '~/images/noResults.svg'

interface BaseProps {
  id: number
}

const TableList = <T extends BaseProps>({
  columns,
  rows,
  page,
  perPage,
  totalNumRows,
  rowsPerPageOptions = [10, 25, 50],
  orderBy,
  sortBy,
  loading = false,
  disablePagination,
  onPageChange,
  onOrderChange,
  onNumRowsChange,
  clearFilters,
  hasClearFilter,
  noResultsTitle = '',
  noResultsDescription,
}: Props<T>) => {
  const theme = useTheme()
  const handleChangePage = (event: unknown, newPage: number) => {
    onPageChange(newPage + 1)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    onNumRowsChange(+event.target.value)
  }

  const handleSortChange = (newSortBy: string) => {
    let newOrderBy: 'asc' | 'desc'
    if (newSortBy === sortBy) newOrderBy = orderBy === 'asc' ? 'desc' : 'asc'
    else newOrderBy = 'desc'

    onOrderChange(newOrderBy, newSortBy)
  }

  const getColor = (columnValue: string, colorMapping?: Mapper<any>[]) => {
    const color = colorMapping?.find((c) => c.key === columnValue)?.value
    return color || theme.palette.primary.main
  }

  const formatValue = (
    column: Column,
    value: any,
    colorMapping?: Mapper<any>[],
    row?: any
  ) => {
    switch (column.type) {
      case ColumnType.Chip: {
        return (
          <TableChip bgColor={getColor(value, colorMapping)}>{value}</TableChip>
        )
      }
      default:
        return column?.format?.(value, row) || value
    }
  }

  const renderBodyCell = (column: Column, value: T[keyof T], row: T) => {
    if (loading) {
      return (
        <TableCell key={column.id} align={column.align}>
          <Skeleton />
        </TableCell>
      )
    }

    return (
      <TableCell key={column.id} align={column.align}>
        <Box>{formatValue(column, value, column.colorMapper, row)}</Box>
      </TableCell>
    )
  }

  const renderHeadCell = (column: Column) => (
    <TableCell isFirstRow key={column.id} align={column.align}>
      {column.sortable ? (
        <TableSortLabel
          active={sortBy === column.id}
          direction={sortBy === column.id ? orderBy : 'asc'}
          onClick={() => handleSortChange(column.id)}
        >
          {column.label}
        </TableSortLabel>
      ) : (
        column.label
      )}
    </TableCell>
  )

  const renderBodyRow = (row: any) => (
    <TableRow role="checkbox" tabIndex={-1} key={row.id}>
      {columns.map((column) => {
        const columnId = column.id as keyof T
        const value = row[columnId]

        return renderBodyCell(column, value, row)
      })}
    </TableRow>
  )

  return (
    <TableBox>
      <TableContainer>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => renderHeadCell(column))}
            </TableRow>
          </TableHead>
          <TableBody>{rows.map((row) => renderBodyRow(row))}</TableBody>
        </Table>
      </TableContainer>
      {rows.length === 0 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          color="#C9C9C9"
          py="10px"
          fontSize="14px"
          border="2px solid #E6E6E9"
        >
          <NoResults
            noResultTitle={noResultsTitle}
            noResultDescription={noResultsDescription}
            clearFilters={clearFilters}
            hasClearFilter={hasClearFilter}
            loading={loading}
            noResultImage={<NoResultsImage />}
          />
        </Box>
      )}
      {!disablePagination && (
        <TablePagination
          component="div"
          rowsPerPageOptions={rowsPerPageOptions}
          count={Number(totalNumRows) || 0}
          rowsPerPage={perPage}
          page={page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </TableBox>
  )
}

export default TableList
