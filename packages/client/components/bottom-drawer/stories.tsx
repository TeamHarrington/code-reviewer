import { storiesOf } from '@storybook/react'
import { BottomDrawer } from '.'
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { TextQuestionAnswer } from '../text-question-answer'
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

stories.add('with questions and answer', () => {
  return (
    <StoryContainer>
      <BottomDrawer
        title={text('title', 'Questions')}
        actionButton={
          <Button
            onClick={action('button clicked')}
            disabled={boolean('disable save button', false)}
            color="primary">
            Save
          </Button>
        }>
        <>
          <TextQuestionAnswer
            editable
            index={1}
            question={
              'Did the author use meaningful and descriptive variable names?'
            }
            answers={[
              'Mostly yes, except for a few places the author used “xxx”. I think “yyy” would be more clear.'
            ]}
          />
          <TextQuestionAnswer
            editable
            index={2}
            question={'Is the algorithm in function xxx efficient?'}
            answers={[
              'I think so. An alternative (equally efficient) way would be to xxx.'
            ]}
          />
          <TextQuestionAnswer
            editable
            index={3}
            question={'Is the algorithm in function xxx efficient?'}
            answers={[
              'I think so. An alternative (equally efficient) way would be to xxx.'
            ]}
          />
          <TextQuestionAnswer
            editable
            index={4}
            question={'Is the algorithm in function xxx efficient?'}
            answers={[
              'I think so. An alternative (equally efficient) way would be to xxx.'
            ]}
          />
        </>
      </BottomDrawer>
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
