import { storiesOf } from '@storybook/react'
import { AnnotationIndicators } from '.'
import { withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { useState } from 'react'

const stories = storiesOf('Annotation Indicators', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div`
  height: 1600px;
`

stories.add('default', () => {
  const annotations = [{ lineNumber: 0 }, { lineNumber: 2 }]

  const Wrapper = () => {
    const [currentLineNumber, setCurrentLineNumber] = useState(-1)
    const [
      selectedAnnotationLineNumber,
      setSelectedAnnotationLineNumber
    ] = useState(-1)

    return (
      <StoryContainer>
        <AnnotationIndicators
          totalLines={10}
          annotations={annotations}
          currentLineNumber={currentLineNumber}
          setCurrentLineNumber={setCurrentLineNumber}
          selectedAnnotationLineNumber={selectedAnnotationLineNumber}
          setSelectedAnnotationLineNumber={setSelectedAnnotationLineNumber}
        />
      </StoryContainer>
    )
  }

  return <Wrapper />
})
