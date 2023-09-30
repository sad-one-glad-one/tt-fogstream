import { createContext, useContext } from 'react'

import { useColorTheme } from '../hooks/useColorTheme'

import { createTheme } from '@mui/material'

export const ThemeContext = createContext({
    mode: "light",
    toggleColorMode: () => {},
    theme: createTheme(),
})

export const ThemeContextProvider = ({ children }) => {
    const value = useColorTheme()

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}
