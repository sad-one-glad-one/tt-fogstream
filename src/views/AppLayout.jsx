import { Outlet } from 'react-router-dom'

import { Box, CssBaseline, Divider, ThemeProvider } from '@mui/material'

import { useThemeContext } from '../theme/ThemeContextProvider'

import AppHeader from '../components/AppHeader'

const AppLayout = () => {
  const { theme } = useThemeContext()
  const mainTagStyles = {
    display: 'flex',
    gridColumnGap: '4px',
    padding: '10px',
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppHeader />

      <Box sx={mainTagStyles} variant="main">
        <Outlet />
      </Box>

      <Box variant="footer" sx={{ marginTop: 'auto' }}>
        <Divider />
        Место для футера (:
      </Box>
    </ThemeProvider>
  )
}

export default AppLayout
