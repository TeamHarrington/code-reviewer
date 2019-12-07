import { storiesOf } from '@storybook/react'
import { FileChips } from '.'
import { withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('File Chips', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return (
    <FileChips
      files={[
        { fileName: 'a1-main.py' },
        { fileName: 'a1-functions.py' },
        { fileName: 'a1-class.py' }
      ]}
    />
  )
})
