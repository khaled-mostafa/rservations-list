import React from 'react'
import { TextField } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

interface Props {
  label: string
  value: Date | null
  onChange: (date: Date | null) => void
}

const DateInput: React.FC<Props> = ({ label, value, onChange }) => {
  const handleDateChange = (date: Date | null) => {
    onChange(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleDateChange}
        renderInput={(params: any) => <TextField {...params} />}
        inputFormat="yyyy-MM-dd"
      />
    </LocalizationProvider>
  )
}

export default DateInput
