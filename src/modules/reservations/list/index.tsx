import { Box, Grid, Typography, Snackbar, Alert } from '@mui/material'
import { tableColumns } from '../constants'
import useList from '../hooks/useList'
import DateInput from '~/components/DateInput'
import { FilterBar } from '~/components/FilterBar'
import { FilterLabel } from '~/components/FilterBar/styles'
import { FilterBox } from '~/components/FilterBox/styles'
import SearchInput from '~/components/SearchInput'
import TableList from '~/components/Table'

const ReservationList = () => {
  const {
    tableQuery,
    filters,
    handlePage,
    handleNumRows,
    handleOrderBy,
    handleSearchQuery,
    handleDate,
    clearFilters,
    filtersOptions,
    loading,
    list,
    numRecords,
    openSnackbar,
    handleCloseSnackbar,
  } = useList()

  return (
    <>
      <Typography
        variant="body1"
        fontWeight="500"
        sx={{
          fontSize: '1.5rem',
          lineHeight: '2.25rem',
          color: '#F68B1E',
          marginBottom: '1rem',
        }}
      >
        Reservations List
      </Typography>
      <FilterBox>
        <FilterLabel>Filters</FilterLabel>
        {Object.keys(filtersOptions)?.map((key, index: number) => (
          <FilterBar
            key={index}
            label={filtersOptions[key].label}
            options={filtersOptions[key].options}
            onChange={filtersOptions[key].onChange}
            totalCount={filtersOptions[key].totalCount}
            selectedOption={filtersOptions[key].selectedOption}
            refKey={filtersOptions[key].refKey}
          />
        ))}

        <Grid container spacing={2}>
          <Grid item md={3}>
            <SearchInput
              value={filters.searchQuery}
              onChange={handleSearchQuery}
              placeholder="Search by name or surename"
            />
          </Grid>
          <Grid item md={3}>
            <DateInput
              label="Date"
              value={filters.date}
              onChange={handleDate}
            />
          </Grid>
        </Grid>
      </FilterBox>
      <Box mt={2}>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: '100%' }}
            variant="filled"
          >
            Error while fetching data, please try again later
          </Alert>
        </Snackbar>
        <TableList
          data-testid="reservation-list"
          loading={loading}
          columns={tableColumns}
          page={tableQuery.page}
          perPage={tableQuery.perPage}
          rows={list || []}
          totalNumRows={numRecords}
          sortBy={tableQuery.sortBy}
          orderBy={tableQuery.orderBy}
          onPageChange={handlePage}
          onNumRowsChange={handleNumRows}
          onOrderChange={handleOrderBy}
          noResultsDescription="No results match your filters"
          hasClearFilter
          clearFilters={clearFilters}
        />
      </Box>
    </>
  )
}

export default ReservationList
