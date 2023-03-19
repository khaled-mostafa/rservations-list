import { InputBase, styled } from '@mui/material'

export const CustomSearchInput = styled(InputBase)(() => ({
  background: 'white',
  borderRadius: '5px',
  border: '1px solid #C7C7CD',
  paddingInline: '20px',
  color: '#75757A',
  height: '56px',
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}))
