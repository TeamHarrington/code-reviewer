import { storiesOf } from '@storybook/react'
import { TextQuestionAnswer } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Text Question Answer', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div``

stories.add('non-editable Q/A from single user', () => {
  return (
    <StoryContainer>
      <TextQuestionAnswer
        index={1}
        question={
          'Did the author use meaningful and descriptive variable names?'
        }
        answer={
          'Mostly yes, except for a few places the author used “xxx”. I think “yyy” would be more clear.'
        }
      />
      <TextQuestionAnswer
        index={2}
        question={'Is the algorithm in function xxx efficient?'}
        answer={
          'I think so. An alternative (equally efficient) way would be to xxx.'
        }
      />
    </StoryContainer>
  )
})

stories.add('editable', () => {
  return (
    <StoryContainer>
      <TextQuestionAnswer
        editable
        index={1}
        question={
          'Did the author use meaningful and descriptive variable names?'
        }
        answer={text(
          'answer 1',
          'Mostly yes, except for a few places the author used “xxx”. I think “yyy” would be more clear.'
        )}
        onChange={event => console.log(event.target.value)}
      />
      <TextQuestionAnswer
        editable
        index={2}
        question={'Is the algorithm in function xxx efficient?'}
        answer={text(
          'answer 2',
          'Mostly yes, except for a few places the author used “xxx”. I think “yyy” would be more clear.'
        )}
        onChange={event => console.log(event.target.value)}
      />
    </StoryContainer>
  )
})
