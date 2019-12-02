import { storiesOf } from '@storybook/react'
import { PeerTabs } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Peer Tabs', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return <PeerTabs />
})
