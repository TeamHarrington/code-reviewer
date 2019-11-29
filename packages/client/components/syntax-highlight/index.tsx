import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export interface Props {
  codeString: string
  highlightedLines?: [number?]
  colorTheme?: object
  language?: string
}

export const SyntaxHighlight = ({
  codeString,
  colorTheme = vs2015,
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
          style.backgroundColor = '#144212'
        }
        return { style } as React.DOMAttributes<HTMLElement>
      }}>
      {codeString}
    </SyntaxHighlighter>
  )
}
