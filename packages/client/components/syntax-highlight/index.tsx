import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { AnnotationIndicators } from '../annotation-indicators'

export interface SyntaxHighlightProps {
  codeString: string
  highlightedLines?: number[]
  colorTheme?: any
  language?: string
  editable?: boolean
  annotations?: any[]
}

const Container = styled(Grid)``

const LeftContainer = styled(Grid)`
  width: 32px;
`

const CodeContainer = styled(Grid)`
  flex: 1;
`

export const SyntaxHighlight = ({
  codeString,
  colorTheme = vs2015,
  highlightedLines = [],
  language = 'python',
  editable = false,
  annotations = []
}: SyntaxHighlightProps) => {
  const [currentLineNumber, setCurrentLineNumber] = useState(-1)
  const [
    selectedAnnotationLineNumber,
    setSelectedAnnotationLineNumber
  ] = useState(-1)

  return (
    <Container container>
      <LeftContainer>
        <AnnotationIndicators
          editable={editable}
          totalLines={10}
          annotations={annotations}
          currentLineNumber={currentLineNumber}
          setCurrentLineNumber={setCurrentLineNumber}
          selectedAnnotationLineNumber={selectedAnnotationLineNumber}
          setSelectedAnnotationLineNumber={setSelectedAnnotationLineNumber}
        />
      </LeftContainer>
      <CodeContainer>
        <SyntaxHighlighter
          customStyle={{ fontSize: '20px', margin: 0 }}
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
            // TBD: hover effect
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
      </CodeContainer>
    </Container>
  )
}
