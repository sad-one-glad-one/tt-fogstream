import { Outlet } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { useThemeContext } from '../../theme/ThemeContextProvider'

import AppSidebar from '../../components/app-sidebar/AppSidebar'

const AppLayout = () => {
    const { theme } = useThemeContext()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <header className="header">HEADER</header>

            <main className="main">
                <AppSidebar />
                <Outlet />
            </main>

            <footer className="footer">FOOTER</footer>
        </ThemeProvider>
    )
}

export default AppLayout
