import { Box, Button, Divider, Slider, Typography } from '@mui/material'

import { useThemeContext } from '../theme/ThemeContextProvider'

const SettingsView = () => {
  const { toggleColorMode, fontSize, changeFontSize } = useThemeContext()

  return (
    <Box>
      <Button onClick={toggleColorMode}>перключить тему</Button>
      <Divider sx={{ margin: '10px 0' }} />
      <Typography>Изменить размер текста</Typography>
      <Slider
        value={fontSize}
        min={8}
        step={2}
        max={30}
        valueLabelDisplay="auto"
        onChange={(e) => changeFontSize(e.target.value)}
      />
    </Box>
  )
}

export default SettingsView
