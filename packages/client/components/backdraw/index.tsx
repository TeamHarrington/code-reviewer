import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'

export function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button onClick={handleDrawerOpen}>
        <MenuIcon />
      </button>
      <Drawer variant="persistent" anchor="bottom" open={open}>
        <button onClick={handleDrawerClose}>
          <MenuIcon />
        </button>

        <div>drawer content</div>
        <div>drawer content</div>
        <div>drawer content</div>
        <div>drawer content</div>
        <div>drawer content</div>
      </Drawer>
    </>
  )
}
