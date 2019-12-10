import React from 'react'
import { Drawer, Grid, Typography, Button } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  display: relative;
`

const DrawerTitle = styled(Typography)`
  padding: 14px;
`

const DrawerContent = styled(Grid)`
  height: ${(props: any) => props.height || '100px'};
`

export const BottomDrawer = ({ title = 'Questions' }) => {
  const [drawerHeight, setDrawerHeight] = React.useState('50px')

  const handleSaveOnClick = () => {
    if (drawerHeight === '50px') {
      setDrawerHeight('200px')
    } else {
      setDrawerHeight('50px')
    }
  }

  return (
    <Container>
      <Drawer variant="persistent" anchor="bottom" open>
        <Grid container justify="space-between">
          <DrawerTitle>{title}</DrawerTitle>
          <Button color="primary" onClick={handleSaveOnClick}>
            save
          </Button>
        </Grid>

        <>
          <DrawerContent height={drawerHeight}></DrawerContent>
        </>
      </Drawer>
    </Container>
  )
}
