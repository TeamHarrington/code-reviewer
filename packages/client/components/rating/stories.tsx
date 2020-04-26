import { storiesOf } from '@storybook/react'
import { Rating } from '.'
import { withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const StoryContainer = styled(Grid)`
  width: 320px;
`

const stories = storiesOf('Rating', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return (
    <StoryContainer>
      <Rating />
    </StoryContainer>
  )
})
