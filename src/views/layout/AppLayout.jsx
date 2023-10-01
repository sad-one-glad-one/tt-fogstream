import { Outlet } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { useThemeContext } from '../../theme/ThemeContextProvider'

import AppHeader from '../../components/AppHeader'

const AppLayout = () => {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppHeader />

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">FOOTER</footer>
    </ThemeProvider>
  )
}

export default AppLayout
