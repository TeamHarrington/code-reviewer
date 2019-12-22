import { storiesOf } from '@storybook/react'
import { Annotations } from '.'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Annotation', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div``

stories.add('default', () => {
  return (
    <StoryContainer>
      <Annotations
        annotations={[
          {
            lineNum: number('first line number', 7),
            content: text('first annotation', 'What is this?')
          },
          {
            lineNum: 10,
            content: 'Bad variable name'
          }
        ]}
      />
    </StoryContainer>
  )
})
