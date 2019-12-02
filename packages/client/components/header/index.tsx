import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import styled from 'styled-components'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Popper from '@material-ui/core/Popper'
import Button from '@material-ui/core/Button'

const Container = styled.div`
  height: 48px;
  background-color: #e6e8eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const UserNameContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BackArrowContainer = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2px;
`

const Title = styled.div`
  font-size: 16px;
  position: absolute;
  margin-left: 43%;
`

const UserContainer = styled.div`
  max-width: 30%;
  margin-right: 0;
  display: flex;
  align-items: center;
  height: 100%;
`

export const Header = ({ backButtonOnClick, title, userName }: any) => {
  const [open, setOpen] = useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const handleSignOutButtonOnClick = () => {
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
    <Container>
      {/* back button / logo container - left */}
      {backButtonOnClick && (
        <BackArrowContainer
          role="button"
          onClick={backButtonOnClick}
          tabIndex={0}>
          <KeyboardArrowLeftIcon />
        </BackArrowContainer>
      )}

      {/* title container - middle */}
      <Title>{title}</Title>

      {/* sign out container - right */}
      <>
        <UserContainer
          role="button"
          onClick={handleToggle}
          ref={anchorRef}
          tabIndex={0}
          aria-haspopup="menu"
          aria-label={`Hello ${userName}. Click to open sign out .`}>
          <UserNameContainer>{userName}</UserNameContainer>
          <KeyboardArrowDownIcon />
        </UserContainer>
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-end">
          <ClickAwayListener onClickAway={handleClose}>
            <Button onClick={handleSignOutButtonOnClick} variant="outlined">
              {'Sign Out'}
            </Button>
          </ClickAwayListener>
        </Popper>
      </>
    </Container>
  )
}
