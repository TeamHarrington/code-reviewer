import { storiesOf } from '@storybook/react'
import { PersistentDrawerLeft } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Backdrop', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return <PersistentDrawerLeft />
})
