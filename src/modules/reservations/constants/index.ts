import dayjs from 'dayjs'
import { Column, ColumnType } from '~/components/Table/types'

export const colorMapper = [
  {
    key: 'NOT CONFIRMED',
    value: '#F68B1E',
  },
  {
    key: 'CHECKED OUT',
    value: 'grey',
  },
  {
    key: 'CONFIRMED',
    value: 'green',
  },
  {
    key: 'SEATED',
    value: '#5D77FC',
  },
]

export const tableColumns: Column[] = [
  {
    id: 'id',
    label: 'ID',
    type: ColumnType.Text,
    sortable: true,
  },
  {
    id: 'customer.firstName',
    label: 'User Name',
    type: ColumnType.Text,
    sortable: true,
    format: (value: string, row: any) =>
      `${row?.customer?.firstName} ${row?.customer?.lastName}`,
  },
  {
    id: 'quantity',
    label: 'Quantity',
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: 'status',
    label: 'Status',
    type: ColumnType.Chip,
    sortable: true,
    colorMapper,
  },
  {
    id: 'businessDate',
    label: 'Business Date',
    type: ColumnType.Text,
    sortable: true,
    format: (value: string) => value.replaceAll('.', '-'),
  },
  {
    id: 'start',
    label: 'Start Time',
    type: ColumnType.Text,
    sortable: false,
    format: (value: string) => dayjs(value).format('DD-MM-YYYY HH:mm A'),
  },
  {
    id: 'end',
    label: 'End Time',
    type: ColumnType.Text,
    sortable: false,
    format: (value: string) => dayjs(value).format('DD-MM-YYYY HH:mm A'),
  },
  {
    id: 'shift',
    label: 'Shift',
    type: ColumnType.Text,
    sortable: false,
    format: (value: string) => value.toLowerCase(),
  },
  {
    id: 'area',
    label: 'Area',
    type: ColumnType.Text,
    sortable: false,
    format: (value: string) => value.toLowerCase(),
  },
]

export const statusOptions = [
  {
    id: 0,
    name: 'All',
    value: '',
  },
  {
    id: 1,
    name: 'Not Confirmed',
    value: 'NOT CONFIRMED',
  },
  {
    id: 2,
    name: 'Checked Out',
    value: 'CHECKED OUT',
  },
  {
    id: 3,
    name: 'Confirmed',
    value: 'CONFIRMED',
  },
  {
    id: 4,
    name: 'Seated',
    value: 'SEATED',
  },
]

export const shiftOptions = [
  {
    id: 0,
    name: 'All',
    value: '',
  },
  {
    id: 1,
    name: 'Breakfast',
    value: 'BREAKFAST',
  },
  {
    id: 2,
    name: 'Lunch',
    value: 'LUNCH',
  },
  {
    id: 3,
    name: 'Dinner',
    value: 'DINNER',
  },
]

export const areaOptions = [
  {
    id: 0,
    name: 'All',
    value: '',
  },
  {
    id: 1,
    name: 'Bar',
    value: 'BAR',
  },
  {
    id: 2,
    name: 'Main Room',
    value: 'MAIN ROOM',
  },
]
