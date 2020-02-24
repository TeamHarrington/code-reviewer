import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export interface Props {
  codeString: string
  highlightedLines?: number[]
  colorTheme?: any
  language?: string
}

export const SyntaxHighlight = ({
  codeString,
  colorTheme = vs2015,
  highlightedLines = [],
  language = 'python'
}: Props) => {
  const [currentLineNumber, setCurrentLineNumber] = useState(-1)

  return (
    <div>
      <div>{`currentLineNumber: ${currentLineNumber}`}</div>
      <SyntaxHighlighter
        customStyle={{ fontSize: '20px', marginTop: 0 }}
        showLineNumbers
        style={colorTheme}
        wrapLines
        language={language}
        lineProps={(lineNumber: number) => {
          const style: any = {}
          if (highlightedLines.includes(lineNumber)) {
            style['backgroundColor'] =
              colorTheme['hljs-addition'].backgroundColor || 'yellow'
          }
          if (currentLineNumber === lineNumber) {
            style['opacity'] = '50%'
          }

          return {
            style,
            onMouseEnter() {
              setCurrentLineNumber(lineNumber)
            },
            onMouseLeave() {
              setCurrentLineNumber(-1)
            }
          } as React.DOMAttributes<HTMLElement>
        }}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}
