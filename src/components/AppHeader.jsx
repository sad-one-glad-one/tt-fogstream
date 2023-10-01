import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

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
        <Link to="/">
          <Typography sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Главная
          </Typography>
        </Link>
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
          <Link style={{ width: '100%' }} to={link.path}>
            <ListItemButton sx={{ width: '100%' }}>
              <ListItemText primary={link.name}/>
            </ListItemButton>
          </Link>
        </ListItem>
      )}
    </List>
  )
}

export default AppHeader
