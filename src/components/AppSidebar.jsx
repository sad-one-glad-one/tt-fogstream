import { Drawer } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'

import { toggleSidebarVisibilityAction } from '../store/PageReducer'

const AppSidebar = ({ children }) => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.page.isSidebarVisible)

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => dispatch(toggleSidebarVisibilityAction(false))}
    >
      {children}
    </Drawer>
  )
}

export default AppSidebar
