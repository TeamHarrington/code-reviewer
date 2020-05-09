import { storiesOf } from '@storybook/react'
import { BottomDrawer, FeedbackDrawer } from '.'
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { Button } from '@material-ui/core'
import { Annotations } from '../annotation'
import CloseIcon from '@material-ui/icons/Close'

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
      <BottomDrawer
        title={text('title', 'Drawer Title')}
        actionButton={<Button color="primary">Button</Button>}>
        some drawer content
      </BottomDrawer>
    </StoryContainer>
  )
})

stories.add('with feedback', () => {
  return (
    <StoryContainer>
      <FeedbackDrawer
        editable={boolean('editable', true)}
        questions={[
          'Did the author use meaningful and descriptive variable names?',
          'Is the algorithm in function xxx efficient?'
        ]}
        answers={[
          'Mostly yes, except for a few places the author used “xxx”. I think “yyy” would be more clear.',
          'I think so. An alternative (equally efficient) way would be to xxx.'
        ]}
      />
    </StoryContainer>
  )
})

stories.add('with annotations', () => {
  return (
    <StoryContainer>
      <BottomDrawer
        fixedHeight="178px"
        title={text('title', 'Annotations')}
        actionButton={
          <Button onClick={action('button clicked')}>
            <CloseIcon />
          </Button>
        }>
        <Annotations
          lineNum={number('first line number', 7)}
          annotations={[
            {
              content: text('first annotation', 'What is this?')
            }
          ]}
        />
      </BottomDrawer>
    </StoryContainer>
  )
})
