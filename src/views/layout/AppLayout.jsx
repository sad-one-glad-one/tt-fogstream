import { Outlet } from 'react-router-dom'

import { Box, CssBaseline, ThemeProvider } from '@mui/material'

import { useThemeContext } from '../../theme/ThemeContextProvider'

import AppHeader from '../../components/AppHeader'

const AppLayout = () => {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppHeader />

      <Box variant="main" className="main">
        <Outlet />
      </Box>

      <footer className="footer">FOOTER</footer>
    </ThemeProvider>
  )
}

export default AppLayout
