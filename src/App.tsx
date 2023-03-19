import type { FC } from 'react'
import {
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
  Box as MuiBox,
  BoxProps,
} from '@mui/material'
import { styled } from '@mui/system'
import { theme } from '~/theme'

export const ContainerBox = styled(MuiBox)<BoxProps>(() => ({
  maxHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  position: 'relative',
  width: '100%',
}))

const ContentBox = styled(MuiBox)(({ theme: themeCSS }) => ({
  display: 'flex',
  minHeight: '100vh',
  maxHeight: '100vh',
  bgcolor: themeCSS.palette.background.default,
}))

const App: FC = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <ContentBox>
        <ContainerBox
          px={{ xs: 1.5, sm: 1.5, md: 3 }}
          py={{ xs: 1.5, sm: 1.5, md: 3 }}
        >
          List Here
        </ContainerBox>
      </ContentBox>
    </ThemeProvider>
  </StyledEngineProvider>
)

export default App
