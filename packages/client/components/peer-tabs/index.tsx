import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: relative;
  min-height: 200px;
`

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  selectedTabIndex: number
}

function TabPanel(props: TabPanelProps) {
  const { children, selectedTabIndex, index } = props

  return (
    <Typography
      role="tabpanel"
      hidden={selectedTabIndex !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}>
      {children}
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
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0)

  const handleChange = (_: unknown, newValue: number) => {
    setSelectedTabIndex(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setSelectedTabIndex(index)
  }

  return (
    <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={selectedTabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth">
          <Tab label="Peer 1" {...a11yProps(0)} />
          <Tab label="Peer 2" {...a11yProps(1)} />
          <Tab label="Peer 3" {...a11yProps(2)} />
          <Tab label="All" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={selectedTabIndex}
        onChangeIndex={handleChangeIndex}>
        <TabPanel selectedTabIndex={selectedTabIndex} index={0}>
          Peer 1
        </TabPanel>
        <TabPanel selectedTabIndex={selectedTabIndex} index={1}>
          Peer 2
        </TabPanel>
        <TabPanel selectedTabIndex={selectedTabIndex} index={2}>
          Peer 3
        </TabPanel>
        <TabPanel selectedTabIndex={selectedTabIndex} index={3}>
          All
        </TabPanel>
      </SwipeableViews>
    </Container>
  )
}
