import { amber, deepOrange, grey, teal } from '@mui/material/colors'

const theme = {
  palette: {
    primary: amber,
  },
}

// TODO: подобрать цвета
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: amber,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : mode === 'dark'
        ? {
          primary: teal,
          divider: teal[700],
          background: {
            default: teal[900],
            paper: teal[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }
        : mode === 'custom' && {
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }
    ),
  },
})

export default theme
