import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import styled from 'styled-components'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Popper from '@material-ui/core/Popper'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Logo } from '../icons/logo'

const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  box-sizing: border-box;
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

const LogoContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
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

interface HeaderProps {
  backButtonOnClick?: () => null
  title?: string
  userName?: string
}

export const Header = ({
  backButtonOnClick,
  title = '',
  userName = ''
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const handleSignOutButtonOnClick = () => {
    setIsMenuOpen(false)
    setIsAlertOpen(true)
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(prevOpen => !prevOpen)
  }

  const handleMenuClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }
    setIsMenuOpen(false)
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
      {!backButtonOnClick && (
        <a href="app url, TBD">
          <LogoContainer>
            <Logo height={24} width={24} />
          </LogoContainer>
        </a>
      )}

      {/* title container - middle */}
      <Title>{title}</Title>

      {/* sign out container - right */}
      <>
        <UserContainer
          role="button"
          onClick={handleMenuToggle}
          ref={anchorRef}
          tabIndex={0}
          aria-haspopup="menu"
          aria-label={`Hello ${userName}. Click to open user menu.`}>
          <UserNameContainer>{userName}</UserNameContainer>
          <KeyboardArrowDownIcon />
        </UserContainer>

        {/* user menu */}
        <Popper
          open={isMenuOpen}
          anchorEl={anchorRef.current}
          placement="bottom-end">
          <ClickAwayListener onClickAway={handleMenuClose}>
            <Button onClick={handleSignOutButtonOnClick} variant="contained">
              {'Sign Out'}
            </Button>
          </ClickAwayListener>
        </Popper>

        {/* sign out alert box */}
        <Dialog
          open={isAlertOpen}
          onClose={() => setIsAlertOpen(false)}
          aria-labelledby="alert-dialog-title">
          <DialogTitle id="alert-dialog-title">
            Log out of Code Reviewer?
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setIsAlertOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsAlertOpen(false)} autoFocus>
              Log Out
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Container>
  )
}
