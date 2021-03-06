import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'
import units from 'design-units'

const Container = styled.div<{ drawerHeight: string }>`
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  padding-top: 6px;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  transition: height 0.3s;
  position: fixed;
  bottom: 0px;
  width: 100%;
  ${({ drawerHeight }) =>
    units({
      height: drawerHeight,
      display: ['block', 'none']
    })}
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

export interface MobileDrawerProps {
  title: string
  children: React.ReactNode
  actionButton?: React.ReactNode
  isClosed?: boolean
  fixedHeight?: string
}

// this components has 2 modes: adjustable height and fixed height
// e.g. passing fixedHeight: '200px' will hide the button to adjust
// hegith, so the drawer's height always stay the same
export const MobileDrawer = ({
  title,
  children,
  actionButton,
  isClosed = false,
  fixedHeight
}: MobileDrawerProps) => {
  const minimizedHeight = '52px'
  const expandedHeight = '400px'
  const [drawerHeight, setDrawerHeight] = useState(
    fixedHeight || minimizedHeight
  )

  const handlers = useSwipeable({
    onSwipedUp: () => setDrawerHeight(expandedHeight),
    onSwipedDown: () => setDrawerHeight(minimizedHeight),
    trackMouse: true
  })

  const toggleHeight = () => {
    setDrawerHeight(prev => {
      return prev === minimizedHeight ? expandedHeight : minimizedHeight
    })
  }

  if (isClosed) {
    return null
  }

  return (
    <Container drawerHeight={drawerHeight}>
      <Grid>
        {!fixedHeight && <ExtendButton onClick={toggleHeight} {...handlers} />}

        <Grid container justify="space-between" alignItems="center">
          {title}
          {actionButton}
        </Grid>
        <ChildContent>{children}</ChildContent>
      </Grid>
    </Container>
  )
}
