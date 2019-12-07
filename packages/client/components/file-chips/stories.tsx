import { storiesOf } from '@storybook/react'
import { FileChips } from '.'
import { withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('File Chips', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return (
    <FileChips
      files={[
        { index: 0, fileName: 'a1-main.py' },
        { index: 1, fileName: 'a1-functions.py' },
        { index: 2, fileName: 'a1-class.py' }
      ]}
    />
  )
})
