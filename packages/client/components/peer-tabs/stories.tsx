import { storiesOf } from '@storybook/react'
import { PeerTabs } from '.'
import { withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('Peer Tabs', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return <PeerTabs />
})
