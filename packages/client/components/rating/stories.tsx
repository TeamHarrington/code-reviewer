import { storiesOf } from '@storybook/react'
import { Rating } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

const stories = storiesOf('Rating', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return <Rating />
})
