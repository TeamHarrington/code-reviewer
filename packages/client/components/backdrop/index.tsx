import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(Grid)`
  height: ${props => (props.isMinimized ? '100px' : '400px')};
  background-color: white;
  position: fixed;
  width: 100%;
  bottom: 0px;
  border-radius: 20px 20px 0px 0px;
  padding-top: 6px;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  transition: height 0.3s;
`

const TitleContainer = styled(Grid)`
  direction: row;
  justify: space-between;
  align-items: center;
  display: flex;
`

const ExtendButton = styled.div`
  width: 40px;
  height: 8px;
  background-color: #8f8f8f;
  border-radius: 5px;
  margin: auto;
`

export interface BackdropProps {
  title: String
  children: any
  saveButtonOnClick: () => void
  isButtonDisabled?: boolean
}

export const Backdrop = ({
  title,
  children,
  saveButtonOnClick,
  isButtonDisabled = false
}: BackdropProps) => {
  const [isMinimized, setIsMinimized] = useState(true)

  return (
    <Container isMinimized={isMinimized}>
      <ExtendButton onClick={() => setIsMinimized(prev => !prev)} />
      <TitleContainer justify="space-between">
        {title}
        {saveButtonOnClick && (
          <Button disabled={!!isButtonDisabled} color="primary">
            Save
          </Button>
        )}
      </TitleContainer>
      {children}
    </Container>
  )
}