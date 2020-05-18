import { storiesOf } from '@storybook/react'
import { Annotation, AnnotationDrawer } from '.'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Annotation', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div`
  max-width: 1000px;
`

const MobileStoryContainer = styled.div`
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
      <Annotation
        lineNum={number('line number', 7)}
        content={text('content', 'Bad variable name')}
        editable={boolean('editable', true)}
      />
    </StoryContainer>
  )
})

stories.add('with mobile drawer', () => {
  return (
    <MobileStoryContainer>
      <AnnotationDrawer
        onCloseClick={() => console.log('clicked')}
        lineNum={1}
        content={'Magic number'}
      />
    </MobileStoryContainer>
  )
})
