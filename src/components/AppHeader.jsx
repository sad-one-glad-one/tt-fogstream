import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'

import { Link as RouterLink } from 'react-router-dom'

import { toggleSidebarVisibilityAction } from '../store/PageReducer'

import AppSidebar from './AppSidebar'

const AppHeader = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar component="nav" sx={{ position: 'sticky' }}>
      <Toolbar>
        {isTablet
          && <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => dispatch(toggleSidebarVisibilityAction(true))}
          >
            <MenuIcon />
          </IconButton>
        }
        <Button
          variant="outlined"
          color="secondary"
          component={RouterLink}
          to="/"
        >
          Главная
        </Button>
        {!isTablet && navLinks()}
      </Toolbar>
      {isTablet && <AppSidebar>{navLinks()}</AppSidebar>}
    </AppBar>
  )
}

const navLinks = () => {
  const links = [
    { name: 'О нас', path: '/about' },
    { name: 'Настройки', path: '/settings' },
    { name: 'Помощь', path: '/help' },
  ]

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 1,
        marginLeft: 'auto',
      }}
    >
      {links.map((link) =>
        <ListItem
          key={link.name}
          disablePadding
        >
          <Button
            color="secondary"
            component={RouterLink}
            to={link.path}
            sx={{ width: '100%' }}
          >
            <ListItemButton>
              <ListItemText primary={link.name}/>
            </ListItemButton>
          </Button>
        </ListItem>
      )}
    </List>
  )
}

export default AppHeader
