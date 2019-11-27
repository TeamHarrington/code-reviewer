import { storiesOf } from '@storybook/react'
import { SyntaxHighlight } from '.'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { ColorTheme } from '.'

const stories = storiesOf('Components', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('new comp', () => {
  const codeString = `def myfunc():
  result = ["str", True, 1, []]
  return result`

  const colorThemeOptions = {
    Dark: ColorTheme.DARK,
    Light: ColorTheme.LIGHT
  }

  const colorTheme = select('color theme', colorThemeOptions, ColorTheme.DARK)

  return (
    <div>
      <div>
        <SyntaxHighlight
          language={text('language', 'python')}
          colorTheme={colorTheme}
          codeString={codeString}
          highlightedLines={[1]}
        />
      </div>
      <div></div>
    </div>
  )
})
