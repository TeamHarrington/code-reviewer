import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'

const BottomDrawerContainer = styled(Grid)`
  height: ${props => props.drawerHeight};
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

const ChildContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 344px;
`

export interface BottomDrawerProps {
  title: string
  children: React.ReactNode
  actionButton?: React.ReactNode
  isClosed?: boolean
  fixedHeight?: string
}

export const BottomDrawer = ({
  title,
  children,
  actionButton,
  isClosed = false,
  fixedHeight
}: BottomDrawerProps) => {
  const [drawerHeight, setDrawerHeight] = useState('100px')

  const handlers = useSwipeable({
    onSwipedUp: () => setDrawerHeight('400px'),
    onSwipedDown: () => setDrawerHeight('100px'),
    trackMouse: true
  })

  const toggleHeight = () => {
    setDrawerHeight(prev => {
      if (prev === '100px') {
        return '400px'
      }
      return '100px'
    })
  }

  if (isClosed) {
    return null
  }

  return (
    <BottomDrawerContainer drawerHeight={fixedHeight || drawerHeight}>
      {!fixedHeight && <ExtendButton onClick={toggleHeight} {...handlers} />}

      <TitleContainer justify="space-between">
        {title}
        {actionButton}
      </TitleContainer>
      <ChildContent>{children}</ChildContent>
    </BottomDrawerContainer>
  )
}
