import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'

export function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, ['bottom']: open })
  }

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Bottom</Button>
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {'draw content'}
      </SwipeableDrawer>
    </div>
  )
}
