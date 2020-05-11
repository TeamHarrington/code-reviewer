import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Tabs, Tab, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: relative;
`

const TabsContainer = styled.div`
  background-color: #f9f9f9;
`

export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  selectedTabIndex: number
}

const TabPanel = (props: TabPanelProps) => {
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

export interface PeerTabsProps {
  contents: any[]
}

export const PeerTabs = ({ contents = [] }: PeerTabsProps) => {
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
        {/* headers of each tab */}
        <Tabs
          value={selectedTabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth">
          {contents.map((_, index) => (
            <Tab
              key={index}
              label={`Peer ${index + 1}`}
              id={`action-tab-${index}`}
              aria-controls={`action-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </TabsContainer>

      {/* content of each tab */}
      <SwipeableViews
        index={selectedTabIndex}
        onChangeIndex={handleChangeIndex}>
        {contents.map((content, index) => (
          <TabPanel
            selectedTabIndex={selectedTabIndex}
            index={index}
            key={index}>
            {content}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Container>
  )
}
