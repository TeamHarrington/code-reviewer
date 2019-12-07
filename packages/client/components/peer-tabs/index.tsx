import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { FileChips } from '../file-chips'

const Container = styled.div`
  width: 100%;
  position: relative;
  min-height: 200px;
`

const TabsContainer = styled.div`
  background-color: #f9f9f9;
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

export const PeerTabs = () => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0)

  const handleChange = (_: unknown, newValue: number) => {
    setSelectedTabIndex(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setSelectedTabIndex(index)
  }

  return (
    <Container>
      <TabsContainer>
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
      </TabsContainer>
      <SwipeableViews
        index={selectedTabIndex}
        onChangeIndex={handleChangeIndex}>
        <TabPanel selectedTabIndex={selectedTabIndex} index={0}>
          <FileChips
            files={[
              { index: 0, fileName: 'a1-main.py' },
              { index: 1, fileName: 'a1-functions.py' },
              { index: 2, fileName: 'a1-class.py' }
            ]}
          />
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
