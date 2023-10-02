import { useState, useMemo } from 'react'

import { createTheme } from '@mui/material'

import { designTokens } from './index'


export const useColorTheme = () => {
  const [mode, setMode] = useState('dark')
  const [fontSize, setFontSize] = useState(16)

  const toggleColorMode = () => 
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  const changeFontSize = (size) =>
    setFontSize(+size)

  const modifiedTheme = useMemo(
    () => createTheme(designTokens(mode, fontSize)),
    [mode, fontSize]
  )

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
    fontSize,
    changeFontSize,
  }
}
