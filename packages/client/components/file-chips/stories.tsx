import { storiesOf } from '@storybook/react'
import { FileChips } from '.'
import { withKnobs } from '@storybook/addon-knobs'

import React, { useState } from 'react'

const stories = storiesOf('File Chips', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  const [selectedChipIndex, setSelectedChipIndex] = useState(0)

  return (
    <FileChips
      files={[
        { name: 'a1-main.py' },
        { name: 'a1-functions.py' },
        { name: 'a1-class.py' }
      ]}
      onClick={setSelectedChipIndex}
      selectedChipIndex={selectedChipIndex}
    />
  )
})
