import { storiesOf } from '@storybook/react'
import { MobileDrawer } from '.'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const stories = storiesOf('Bottom Drawer', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div`
  background-color: #ddd;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`

stories.add('default', () => {
  return (
    <StoryContainer>
      <MobileDrawer
        title={text('title', 'Drawer Title')}
        actionButton={<Button color="primary">Button</Button>}>
        some drawer content
      </MobileDrawer>
    </StoryContainer>
  )
})
