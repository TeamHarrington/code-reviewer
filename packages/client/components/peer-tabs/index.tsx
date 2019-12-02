import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: relative;
  min-height: 200px;
`

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}>
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`
  }
}

export function PeerTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (_: unknown, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example">
          <Tab label="Peer 1" {...a11yProps(0)} />
          <Tab label="Peer 2" {...a11yProps(1)} />
          <Tab label="Peer 3" {...a11yProps(2)} />
          <Tab label="Summary" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          Peer 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          Peer 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Peer 3
        </TabPanel>
        <TabPanel value={value} index={3}>
          Summary
        </TabPanel>
      </SwipeableViews>
    </Container>
  )
}
