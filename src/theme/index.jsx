import { amber } from '@mui/material/colors'

const theme = {
  palette: {
    primary: amber,
  },
}

// TODO: подобрать цвета
export const designTokens = (mode, fontSize) => ({
  palette: {
    mode,
  },
  typography: {
    fontSize: +fontSize,
  },
})

export default theme
