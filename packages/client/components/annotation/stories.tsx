import { storiesOf } from '@storybook/react'
import { Annotation } from '.'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Annotation', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div``

stories.add('default', () => {
  const annotation = {
    7: text('first annotation', 'What is this?')
  }

  return (
    <StoryContainer>
      <Annotation annotation={annotation} />
    </StoryContainer>
  )
})
