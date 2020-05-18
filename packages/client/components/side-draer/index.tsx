import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

const Container = styled.div<{ drawerWidth: string }>`
  height: 100%;
  background-color: white;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 8px;
  box-sizing: border-box;
  transition: width 0.3s;
  position: fixed;
  right: 0px;
  width: ${props => props.drawerWidth};
`

const ChildContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
`

export interface SideDrawerProps {
  title: string
  children: React.ReactNode
}

export const SideDrawer = ({ title, children }: SideDrawerProps) => {
  const [drawerWidth, setDrawerWidth] = useState('320px')

  const closeButton = (
    <Button onClick={() => setDrawerWidth('0px')}>
      <CloseIcon />
    </Button>
  )

  return (
    <Container drawerWidth={drawerWidth}>
      <Grid>
        <Grid container justify="space-between" alignItems="center">
          {title}
          {closeButton}
        </Grid>
        <ChildContent>{children}</ChildContent>
      </Grid>
    </Container>
  )
}
