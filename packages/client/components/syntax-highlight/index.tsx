import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const ADDED = [1]
const REMOVED = [2]

export const SyntaxHighlight = () => {
  const codeString = `def myfunc():
    result = ["str", True, 1, []]
    return result
  `

  return (
    <div>
      <SyntaxHighlighter
        style={atomDark}
        wrapLines={true}
        linestyle={(lineNumber: number) => {
          const style: any = { display: 'block' }
          if (ADDED.includes(lineNumber)) {
            style.backgroundColor = '#dbffdb'
          } else if (REMOVED.includes(lineNumber)) {
            style.backgroundColor = '#dbffdb'
          }
          console.log(style)
          return style
        }}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}
