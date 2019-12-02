import React from 'react'
import Grid from '@material-ui/core/Grid'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Popper from '@material-ui/core/Popper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import styled from 'styled-components'

const UserNameContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default function SplitButton() {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const handleMenuItemClick = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  return (
    <Grid>
      <div
        onClick={handleToggle}
        ref={anchorRef}
        aria-haspopup="menu"
        aria-label={`Hello ${'brian'}. Click to signout.`}>
        <UserNameContainer>{'brian'}</UserNameContainer>
        <KeyboardArrowDownIcon />
      </div>
      <Popper open={open} anchorEl={anchorRef.current} placement="bottom-end">
        <ClickAwayListener onClickAway={handleClose}>
          <div>logoasdfsdafdsafasut</div>
        </ClickAwayListener>
      </Popper>
    </Grid>
  )
}
