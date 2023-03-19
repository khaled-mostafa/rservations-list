import { Box, styled, BoxProps } from '@mui/material'

export const Container = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80%',
}))

export const ImageContainer = styled(Box)(() => ({
  svg: {
    width: '80px',
    height: '80px',
  },
}))
