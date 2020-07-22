import { storiesOf } from '@storybook/react'
import { SyntaxHighlight } from '.'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import * as colorThemes from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const stories = storiesOf('Syntax Highlight', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  const files = [
    {
      id: '1',
      name: 'a1-main.py',
      content: `def myfunc():
    result = ["str", True, 1, []]
    return result
    `
    },
    {
      id: '2',
      name: 'a1.code.py',
      content: `def myfunc():
    result = ["str", True, 1, []]
    return result
    `
    }
  ]

  const colorThemeOptions = {
    ...colorThemes
  }

  const colorTheme = select(
    'color theme',
    colorThemeOptions,
    colorThemes.vs2015
  )

  const annotations = {
    1: 'good variable name',
    5: 'hard-coded value'
  }

  return (
    <div>
      <SyntaxHighlight
        language={text('language', 'python')}
        colorTheme={colorTheme}
        files={files}
        annotations={annotations}
        editable={boolean('editable', true)}
      />
    </div>
  )
})
