import { storiesOf } from '@storybook/react'
import { MobileDrawer, LeftDrawer, RightDrawer, BottomDrawer } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const stories = storiesOf('Drawers', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div`
  background-color: #ddd;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`

stories.add('mobile drawer', () => {
  return (
    <StoryContainer>
      <div>{'Mobile drawer is visible when screen width is < 640px'}</div>
      <MobileDrawer
        title={text('title', 'Drawer Title')}
        actionButton={<Button color="primary">Button</Button>}>
        some drawer content
      </MobileDrawer>
    </StoryContainer>
  )
})

stories.add('left drawer', () => {
  return (
    <StoryContainer>
      <LeftDrawer>content</LeftDrawer>
    </StoryContainer>
  )
})

stories.add('right drawer', () => {
  const closeButton = <Button color="primary">Button</Button>

  return (
    <StoryContainer>
      <RightDrawer title="Title" actionButton={closeButton}>
        content
      </RightDrawer>
    </StoryContainer>
  )
})

stories.add('bottom drawer', () => {
  return (
    <StoryContainer>
      <BottomDrawer title="Title">content</BottomDrawer>
    </StoryContainer>
  )
})
