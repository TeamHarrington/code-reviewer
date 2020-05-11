import { storiesOf } from '@storybook/react'
import { Annotation } from '.'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Annotation', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div``

stories.add('default', () => {
  return (
    <StoryContainer>
      <Annotation
        lineNum={number('line number', 7)}
        content={text('content', 'Bad variable name')}
        editable={boolean('editable', false)}
      />
    </StoryContainer>
  )
})
