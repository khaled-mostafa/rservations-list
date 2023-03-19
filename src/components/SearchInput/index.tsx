import type { FC } from 'react'
import { Close, Search } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'
import { CustomSearchInput } from './styles'

interface SearchInputProps {
  value: string | undefined
  placeholder: string
  type?: string
  onChange: (newSearchQuery: string) => void
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
}: SearchInputProps) => (
  <CustomSearchInput
    type={type}
    fullWidth
    value={value || ''}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    title={placeholder}
    startAdornment={
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
    }
    endAdornment={
      <InputAdornment
        position="end"
        sx={{ cursor: 'pointer' }}
        onClick={() => onChange('')}
      >
        <Close />
      </InputAdornment>
    }
  />
)

export default SearchInput
