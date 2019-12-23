import { storiesOf } from '@storybook/react'
import { Backdrop } from '.'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { TextQuestionAnswer } from '../text-question-answer'

const stories = storiesOf('Backdrop', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
`

const Background = styled.div`
  background-color: #ddd;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`

stories.add('default', () => {
  const showSaveButton = boolean('show save button', true)

  return (
    <Background>
      <StoryContainer>
        <Backdrop
          title={text('title', 'Questions')}
          saveButtonOnClick={showSaveButton && action('save button clicked')}>
          backdrop content
        </Backdrop>
      </StoryContainer>
    </Background>
  )
})

stories.add('with questions and answer', () => {
  const showSaveButton = boolean('show save button', true)

  return (
    <Background>
      <StoryContainer>
        <Backdrop
          title={text('title', 'Questions')}
          saveButtonOnClick={showSaveButton && action('save button clicked')}>
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
          </>
        </Backdrop>
      </StoryContainer>
    </Background>
  )
})
