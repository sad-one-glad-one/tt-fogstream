import { Link } from 'react-router-dom'

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

const AppSidebar = () => {
    const links = [
        {name: 'Главная', path: '/'},
        {name: 'О нас', path: '/about'},
        {name: 'Настройки', path: '/settings'},
        {name: 'Помощь', path: '/help'},
    ]

    return (
        <nav style={{width: '100%', maxWidth: 120}}>
            <List>
                {links.map((link) =>
                    <ListItem key={link.name} disablePadding>
                        <Link to={link.path} style={{width: '100%'}}>
                            <ListItemButton  sx={{width: '100%'}}>
                                <ListItemText primary={link.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                )}
            </List>
        </nav>
    )
}

export default AppSidebar
