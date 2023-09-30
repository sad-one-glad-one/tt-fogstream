import { Outlet } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { useThemeContext } from '../../theme/ThemeContextProvider'

const AppLayout = () => {
    const { theme } = useThemeContext()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <header>HEADER</header>

            <main>
                <Outlet />
            </main>

            <footer>FOOTER</footer>
        </ThemeProvider>
    )
}

export default AppLayout
