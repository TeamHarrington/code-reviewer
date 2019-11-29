import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  vs2015,
  a11yLight
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export enum ColorTheme {
  DARK = vs2015,
  LIGHT = a11yLight
}

export interface Props {
  codeString: string
  highlightedLines?: [number?]
  colorTheme?: ColorTheme
  language?: string
}

export const SyntaxHighlight = ({
  codeString,
  colorTheme = ColorTheme.DARK,
  highlightedLines = [],
  language = 'python'
}: Props) => {
  return (
    <SyntaxHighlighter
      customStyle={{ fontSize: '20px' }}
      showLineNumbers
      style={colorTheme}
      wrapLines
      language={language}
      lineProps={(lineNumber: number) => {
        const style: any = {}
        if (highlightedLines.includes(lineNumber)) {
          style.backgroundColor =
            colorTheme === ColorTheme.DARK ? 'blue' : 'yellow'
          style.opacity = '50%'
        }
        return { style } as React.DOMAttributes<HTMLElement>
      }}>
      {codeString}
    </SyntaxHighlighter>
  )
}
