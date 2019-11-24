import { storiesOf } from '@storybook/react'
import { SyntaxHighlight } from '.'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

const stories = storiesOf('Components', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('new comp', () => (
  <div>
    <SyntaxHighlight />
  </div>
))
