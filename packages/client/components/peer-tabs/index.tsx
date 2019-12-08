import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Tabs, Tab, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: relative;
  min-height: 200px;
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
  content: any[]
}

export const PeerTabs = ({ content = [] }: PeerTabsProps) => {
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
          {content.map((_, index) => (
            <Tab
              key={index}
              label={`Peer ${index}`}
              id={`action-tab-${index}`}
              aria-controls={`action-tabpanel-${index}`}
            />
          ))}
          <Tab
            label="All"
            id={`action-tab-${content.length}`}
            aria-controls={`action-tabpanel-${content.length}`}
          />
        </Tabs>
      </TabsContainer>
      <SwipeableViews
        index={selectedTabIndex}
        onChangeIndex={handleChangeIndex}>
        {/* individual student tab */}
        {content.map((_, index) => (
          <TabPanel
            selectedTabIndex={selectedTabIndex}
            index={index}
            key={index}>
            {`Peer ${index + 1}`}
          </TabPanel>
        ))}

        {/* summary tab */}
        <TabPanel selectedTabIndex={selectedTabIndex} index={content.length}>
          All
        </TabPanel>
      </SwipeableViews>
    </Container>
  )
}
