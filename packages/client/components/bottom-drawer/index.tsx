import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'

const Container = styled(Grid)`
  height: ${props => (props.isMinimized ? '100px' : '400px')};
  background-color: white;
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
  // enlarged touchable area for a11y
  &:before {
    content: '';
    height: 22px;
    width: 48px;
    position: absolute;
    top: 0px;
    left: calc(50% - 24px);
  }
`

export interface BottomDrawerProps {
  title: String
  children: React.ReactNode
  actionButton?: React.ReactNode
}

export const BottomDrawer = ({
  title,
  children,
  actionButton
}: BottomDrawerProps) => {
  const [isMinimized, setIsMinimized] = useState(true)

  const handlers = useSwipeable({
    onSwipedUp: () => setIsMinimized(false),
    onSwipedDown: () => setIsMinimized(true),
    trackMouse: true
  })

  return (
    <Container isMinimized={isMinimized}>
      {/* <ExtendTouchableArea
        onClick={() => setIsMinimized(prev => !prev)}
        {...handlers}> */}
      <ExtendButton
        onClick={() => setIsMinimized(prev => !prev)}
        {...handlers}
      />
      {/* </ExtendTouchableArea> */}
      <TitleContainer justify="space-between">
        {title}
        {actionButton}
      </TitleContainer>
      {children}
    </Container>
  )
}
