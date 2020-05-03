import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import createElement, {
  CreateElementProps
} from 'react-syntax-highlighter/dist/esm/create-element'
import styled from 'styled-components'
import { useOnHover } from '../../hooks/hover.hook'
import { AddAnnotationIcon } from '../icons'

const IconContainer = styled.div`
  display: inline-block;
  height: 24px;
  width: 24px;
  color: white;
  box-sizing: border-box;
`

const LineNumberContainer = styled.span`
  margin-left: 8px;
  margin-right: 12px;
  user-select: none;
`

interface RowProps {
  index: number
  rowProps: CreateElementProps
}

const Row = ({ rowProps, index }: RowProps) => {
  const [isHovered, hoverProps] = useOnHover()
  return (
    <div {...hoverProps}>
      <IconContainer>{isHovered && <AddAnnotationIcon />}</IconContainer>
      <LineNumberContainer>{index}</LineNumberContainer>
      {createElement(rowProps)}
    </div>
  )
}

export interface SyntaxHighlightProps {
  codeString: string
  highlightedLines?: number[]
  colorTheme?: any
  language?: string
  editable?: boolean
  annotations?: any[]
}

export const SyntaxHighlight = ({
  codeString,
  colorTheme = vs2015,
  highlightedLines = [],
  language = 'python',
  editable = false,
  annotations = []
}: SyntaxHighlightProps) => {
  // const [currentLineNum, setCurrentLineNum] = useState(-1)

  const renderRow = (_someOpts: {}) => {
    return ({ rows, stylesheet, useInlineStyles }: any) => {
      return rows.map((row: any, i: number) => (
        <Row
          index={i}
          rowProps={{
            node: row,
            stylesheet,
            useInlineStyles,
            i
          }}
        />
      ))
    }
  }

  return (
    <SyntaxHighlighter
      customStyle={{ fontSize: '20px' }}
      style={colorTheme}
      wrapLines
      language={language}
      renderer={renderRow({})}
      lineProps={(lineNumber: number) => {
        const style: any = {}
        if (highlightedLines.includes(lineNumber)) {
          style['backgroundColor'] =
            colorTheme['hljs-addition'].backgroundColor || 'yellow'
        }
        return { style } as React.DOMAttributes<HTMLElement>
      }}>
      {codeString}
    </SyntaxHighlighter>
  )
}
