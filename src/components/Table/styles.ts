import {
  alpha,
  Box,
  BoxProps,
  styled,
  TableCell as MuiTableCell,
  tableCellClasses,
  TableCellProps as MuiTableCellProps,
  TableContainer as MuiTableContainer,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TableSortLabel as TableSortLabelMui,
  TableSortLabelProps as TableSortLabelPropsMui,
} from '@mui/material'

interface TableCellProps extends MuiTableCellProps {
  isFirstRow?: boolean
}

interface TableSortLabelProps extends TableSortLabelPropsMui {
  isSortableAction?: boolean
}

interface TableChipProps extends BoxProps {
  bgColor?: string
}

interface TableHeadProps {
  title?: string
}

export const TableBox = styled(Box)(({ theme }) => ({
  boxShadow: `0px ${theme.spacing(0.25)} ${theme.spacing(1)} ${alpha(
    theme.palette.common.black,
    0.1
  )}`,
  borderRadius: theme.spacing(0.625),
  background: theme.palette.common.white,
  'p:empty': {
    display: 'none',
  },
}))

export const TableContainer = styled(MuiTableContainer)(({ theme }) => ({
  position: 'relative',
  maxHeight: '65vh',
  borderRadius: theme.spacing(0.625),
}))

export const TableHead = styled(MuiTableHead)<TableHeadProps>(
  ({ theme, title }) => ({
    background: theme.palette.common.white,
    position: 'sticky',
    top: '0',
    zIndex: 1,
    borderTop: title
      ? `${theme.spacing(0)} solid ${theme.palette.primary.main}`
      : 0,
    borderBottom: `${theme.spacing(0.125)} solid ${alpha(
      theme.palette.secondary.light,
      0.2
    )}`,
  })
)

export const TableRow = styled(MuiTableRow)(({ theme }) => ({
  background: theme.palette.common.white,
  color: theme.palette.primary.dark,
  '&:nth-of-type(odd)': {
    backgroundColor: alpha(theme.palette.common.black, 0.04),
  },
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.1),
  },
}))

export const TableCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) => prop !== 'isFirstRow',
})<TableCellProps>(({ theme, isFirstRow }) => ({
  borderBottom: isFirstRow
    ? 'none'
    : `${theme.spacing(0.25)} solid ${alpha(
        theme.palette.secondary.light,
        0.2
      )}`,
  fontSize: isFirstRow ? theme.spacing(1.5) : theme.spacing(1.75),
  paddingTop: isFirstRow ? theme.spacing(1.5) : theme.spacing(1),
  paddingBottom: isFirstRow ? theme.spacing(1.5) : theme.spacing(1),
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
  },
}))

export const TableChip = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isFirstRow',
})<TableChipProps>(({ theme, bgColor }) => ({
  fontSize: 'inherit',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(0.625, 1.25),
  display: 'inline-flex',
  whiteSpace: 'pre',
  textAlign: 'center',
  backgroundColor: bgColor,
  color: theme.palette.common.white,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
    padding: theme.spacing(0.1, 0.5),
    borderRadius: theme.spacing(0.4),
  },
}))

export const TableSortLabel = styled(TableSortLabelMui)<TableSortLabelProps>(
  ({ theme, isSortableAction }) => ({
    paddingLeft: isSortableAction ? theme.spacing(2.75) : '0',
  })
)
