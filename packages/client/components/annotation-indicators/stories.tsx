import { storiesOf } from '@storybook/react'
import { AnnotationIndicators } from '.'
import { withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Annotation Indicators', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div`
  height: 1600px;
`

stories.add('default', () => {
  return (
    <StoryContainer>
      <AnnotationIndicators />
    </StoryContainer>
  )
})
