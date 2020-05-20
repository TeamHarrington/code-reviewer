import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import units from 'design-units'

const Container = styled.div`
  height: 300px;
  width: 100%;
  background-color: white;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 8px;
  box-sizing: border-box;
  ${units({
    display: ['none', 'block']
  })}
`

const ChildContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
`

export interface BottomDrawerProps {
  title: string
  children: React.ReactNode
}

export const BottomDrawer = ({ title, children }: BottomDrawerProps) => {
  return (
    <Container>
      <Grid>
        <Grid container justify="space-between" alignItems="center">
          <Typography>{title}</Typography>
        </Grid>
        <ChildContent>{children}</ChildContent>
      </Grid>
    </Container>
  )
}
