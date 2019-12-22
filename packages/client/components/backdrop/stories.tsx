import { storiesOf } from '@storybook/react'
import { Backdrop } from '.'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Backdrop', module)

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
  const showSaveButton = boolean('show save button', true)

  return (
    <StoryContainer>
      <Backdrop
        title={'Questions'}
        saveButtonOnClick={
          showSaveButton ? action('save button clicked') : () => null
        }>
        backdrop content
      </Backdrop>
    </StoryContainer>
  )
})
