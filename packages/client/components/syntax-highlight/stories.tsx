import { storiesOf } from '@storybook/react'
import { SyntaxHighlight } from '.'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import * as colorThemes from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const stories = storiesOf('Syntax Highlight', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  const codeString = `def myfunc():
  result = ["str", True, 1, []]
  return result












  `

  const colorThemeOptions = {
    ...colorThemes
  }

  const colorTheme = select(
    'color theme',
    colorThemeOptions,
    colorThemes.vs2015
  )

  const annotations = [{ lineNumber: 0 }, { lineNumber: 2 }]

  return (
    <div>
      <SyntaxHighlight
        language={text('language', 'python')}
        colorTheme={colorTheme}
        codeString={codeString}
        highlightedLines={[1]}
        annotations={annotations}
        editable={boolean('editable', true)}
      />
    </div>
  )
})
