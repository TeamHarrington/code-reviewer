import { storiesOf } from '@storybook/react'
import { Header } from '.'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Header', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return (
    <Header
      backButtonOnClick={action('back button clicked')}
      userButtonOnClick={action('user button clicked')}
      title="CSCA08"
      userName="Brian Harrington"
    />
  )
})
