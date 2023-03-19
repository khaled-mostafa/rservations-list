import { createTheme } from '@mui/material'

const rootTheme = createTheme()

export const theme = createTheme(rootTheme, {
  palette: {
    primary: {
      main: '#F68B1E',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
      lightGray: '#EDEEEF',
      gray: 'gray',
    },
    background: {
      default: '#FAFAFA',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 678,
      md: 991,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          'scroll-behavior': 'smooth',
        },
        body: {
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: 'rgba(0,0,0,.1)',
            width: '0.5em',
            height: '0.5em',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 6,
            backgroundColor: 'gray',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#2b2b2b',
          },
          fontSize: 14,
        },
      },
    },
  },
})
