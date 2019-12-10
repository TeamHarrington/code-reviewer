import { storiesOf } from '@storybook/react'
import { BottomDrawer } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Backdrop', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #eeeeee;
  // outline: 1px solid red;
  position: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

stories.add('default', () => {
  return (
    <StoryContainer>
      <BottomDrawer />
    </StoryContainer>
  )
})
