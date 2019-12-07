import { storiesOf } from '@storybook/react'
import { Header } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Header', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return (
    <Header
      backButtonOnClick={action('back button clicked')}
      title={text('course title', 'CSCA08')}
      userName={text('user name', 'Trent-Alexander')}
    />
  )
})

stories.add('show logo', () => {
  return (
    <Header
      title={text('course title', 'CSCA08')}
      userName={text('user name', 'Trent-Alexander')}
    />
  )
})
