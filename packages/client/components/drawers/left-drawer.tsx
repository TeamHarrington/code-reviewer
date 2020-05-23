import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import units from 'design-units'
import { Logo } from '../icons'

const Container = styled.div<{ drawerWidth: string }>`
  height: 100%;
  background-color: white;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 8px;
  box-sizing: border-box;
  transition: width 0.3s;
  position: fixed;
  left: 0px;
  ${({ drawerWidth }) =>
    units({
      width: drawerWidth,
      display: ['none', 'block']
    })}
`

const ChildContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
`

export interface LeftDrawerProps {
  children: React.ReactNode
}

export const LeftDrawer = ({ children }: LeftDrawerProps) => {
  return (
    <Container drawerWidth={'320px'}>
      <Grid>
        <Grid container justify="space-between" alignItems="center">
          <Logo />
        </Grid>
        <ChildContent>{children}</ChildContent>
      </Grid>
    </Container>
  )
}
