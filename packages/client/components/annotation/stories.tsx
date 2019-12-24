import { storiesOf } from '@storybook/react'
import { Annotations } from '.'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Annotation', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div``

const StoryTextContainer = styled.div`
  background-color: #eee;
  padding: 8px;
  margin-top: 16px;
`

stories.add('default', () => {
  return (
    <StoryContainer>
      <StoryTextContainer>from a single peer</StoryTextContainer>
      <Annotations
        lineNum={number('first line number', 7)}
        annotations={[
          {
            content: text('first annotation', 'What is this?')
          }
        ]}
      />

      <StoryTextContainer>from multiple peers</StoryTextContainer>
      <Annotations
        lineNum={number('first line number', 7)}
        annotations={[
          {
            from: 'Peer 1',
            content: text('first annotation', 'What is this?')
          },
          {
            from: 'Peer 2',
            content: 'Bad variable name'
          }
        ]}
      />
    </StoryContainer>
  )
})
