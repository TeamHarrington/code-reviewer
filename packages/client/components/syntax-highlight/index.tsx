import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import createElement, {
  CreateElementProps
} from 'react-syntax-highlighter/dist/esm/create-element'
import styled from 'styled-components'
import { useOnHover } from '../../hooks/hover.hook'
import { AddAnnotationIcon } from '../icons'

export interface Props {
  codeString: string
  highlightedLines?: number[]
  colorTheme?: any
  language?: string
}

const IconContainer = styled.div`
  display: inline-block;
  height: 24px;
  width: 24px;
  color: white;
  box-sizing: border-box;
`

const LineNumberContainer = styled.span`
  margin-left: 16px;
  margin-right: 16px;
`

interface RowProps {
  index: number
  rowProps: CreateElementProps
}

const Row = ({ rowProps, index }: RowProps) => {
  const [isHovered, hoverProps] = useOnHover()
  return (
    <div {...hoverProps}>
      <IconContainer>
        {isHovered && <AddAnnotationIcon></AddAnnotationIcon>}
      </IconContainer>
      <LineNumberContainer>{index}</LineNumberContainer>
      {createElement(rowProps)}
    </div>
  )
}

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

export const SyntaxHighlight = ({
  codeString,
  colorTheme = vs2015,
  highlightedLines = [],
  language = 'python'
}: Props) => {
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
