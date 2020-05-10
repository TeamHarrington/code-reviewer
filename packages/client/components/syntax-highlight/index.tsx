import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import createElement, {
  CreateElementProps
} from 'react-syntax-highlighter/dist/cjs/create-element'
import styled from 'styled-components'
import { useOnHover } from '../../hooks/hover.hook'
import { AddAnnotationIcon, AnnotationIcon } from '../icons'

const RowContainer = styled.div`
  display: flex;
  font-size: 20px;
`

const IconContainer = styled.div`
  display: inline-block;
  height: 24px;
  min-width: 24px;
  color: white;
  box-sizing: border-box;
`

const LineNumberContainer = styled.span`
  margin-left: 8px;
  margin-right: 12px;
  user-select: none;
  min-width: 32px;
`

interface RowProps {
  index: number
  rowProps: CreateElementProps
  editable: boolean
  annotations: any
  selectedLineNum: number
  setSelectedLineNum: (i: number) => void
}

const Row = ({
  rowProps,
  index,
  editable,
  annotations,
  selectedLineNum,
  setSelectedLineNum
}: RowProps) => {
  const [isHovered, hoverProps] = useOnHover()

  // make the starting line number 1 instead of 0
  const i = index + 1

  return (
    <RowContainer {...hoverProps}>
      <IconContainer>
        {annotations[i] ? (
          <AnnotationIcon
            onClick={() => setSelectedLineNum(i)}
            isActive={selectedLineNum === i}
          />
        ) : (
          editable &&
          (isHovered || selectedLineNum === i) && (
            <AddAnnotationIcon onClick={() => setSelectedLineNum(i)} />
          )
        )}
      </IconContainer>
      <LineNumberContainer>{i}</LineNumberContainer>
      {createElement(rowProps)}
    </RowContainer>
  )
}

export interface SyntaxHighlightProps {
  codeString: string
  colorTheme?: any
  language?: string
  editable?: boolean
  annotations?: any
}

export const SyntaxHighlight = ({
  codeString,
  colorTheme = vs2015,
  language = 'python',
  editable = false,
  annotations = {}
}: SyntaxHighlightProps) => {
  const [selectedLineNum, setSelectedLineNum] = useState(-1)

  const renderRow = (_someOpts: {}) => {
    return ({ rows, stylesheet, useInlineStyles }: any) => {
      return rows.map((row: any, i: number) => (
        <Row
          key={i}
          index={i}
          rowProps={{
            node: row,
            stylesheet,
            useInlineStyles,
            i
          }}
          editable={editable}
          annotations={annotations}
          selectedLineNum={selectedLineNum}
          setSelectedLineNum={setSelectedLineNum}
        />
      ))
    }
  }

  return (
    <SyntaxHighlighter
      style={colorTheme}
      wrapLines
      language={language}
      renderer={renderRow({})}
      lineProps={(lineNumber: number) => {
        const style: any = {}
        if (annotations[lineNumber]) {
          style['backgroundColor'] =
            colorTheme['hljs-addition'].backgroundColor || 'yellow'
        }
        return { style } as React.DOMAttributes<HTMLElement>
      }}>
      {codeString}
    </SyntaxHighlighter>
  )
}
