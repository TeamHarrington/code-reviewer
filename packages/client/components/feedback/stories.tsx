import { storiesOf } from '@storybook/react'
import { FeedbackDrawer } from '.'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const stories = storiesOf('Feedback', module)

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
