import React, { useState } from 'react'

import { getDesignTokens } from '../theme'

import { createTheme } from '@mui/material'

export const useColorTheme = () => {
    const [mode, setMode] = useState("light")

    const toggleColorMode = (mode) =>
        setMode((prevMode) => (prevMode !== mode && mode))

    const modifiedTheme = React.useMemo(
        () => createTheme('custom', getDesignTokens(mode)),
        [mode]
    )

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    }
}
