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
import { PeerTabs } from '../peer-tabs'
import { FileChips } from '../file-chips'

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
    <div>
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
              <Button onClick={handleSignOutButtonOnClick} variant="outlined">
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
      <PeerTabs />
      <FileChips
        files={[
          { index: 0, fileName: 'a1-main.py' },
          { index: 1, fileName: 'a1-functions.py' },
          { index: 2, fileName: 'a1-class.py' }
        ]}
      />
    </div>
  )
}
