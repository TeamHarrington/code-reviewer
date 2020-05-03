import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import createElement, {
  CreateElementProps
} from 'react-syntax-highlighter/dist/esm/create-element'
import styled from 'styled-components'
import { useOnHover } from '../../hooks/hover.hook'
import { AddAnnotationIcon, AnnotationIcon } from '../icons'
import { Grid } from '@material-ui/core'

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
  editable: boolean
  annotations: any
}

const Row = ({ rowProps, index, editable, annotations }: RowProps) => {
  const [isHovered, hoverProps] = useOnHover()
  return (
    <Grid container {...hoverProps}>
      <IconContainer>
        {annotations[index] ? (
          <AnnotationIcon />
        ) : (
          editable && isHovered && <AddAnnotationIcon />
        )}
      </IconContainer>
      <LineNumberContainer>{index}</LineNumberContainer>
      {createElement(rowProps)}
    </Grid>
  )
}

export interface SyntaxHighlightProps {
  codeString: string
  highlightedLines?: number[]
  colorTheme?: any
  language?: string
  editable?: boolean
  annotations?: any
}

export const SyntaxHighlight = ({
  codeString,
  colorTheme = vs2015,
  highlightedLines = [],
  language = 'python',
  editable = false,
  annotations = {}
}: SyntaxHighlightProps) => {
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
          editable={editable}
          annotations={annotations}
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
