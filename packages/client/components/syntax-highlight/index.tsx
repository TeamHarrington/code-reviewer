import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import createElement, {
  CreateElementProps
} from 'react-syntax-highlighter/dist/esm/create-element'
import styled from 'styled-components'
import { FunctionComponent } from 'react'
import { useOnHover } from '../../hooks/hover.hook'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'

export interface Props {
  codeString: string
  highlightedLines?: number[]
  colorTheme?: any
  language?: string
}

const IconContainer = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  color: white;
  box-sizing: border-box;
`

interface RowProps {
  index: number
  rowProps: CreateElementProps
}

const Row: FunctionComponent<RowProps> = ({ rowProps, index }) => {
  const [isHovered, hoverProps] = useOnHover()
  return (
    <div {...hoverProps}>
      <IconContainer>
        {isHovered && <ChatBubbleIcon fontSize="small"></ChatBubbleIcon>}
      </IconContainer>
      {index}
      {createElement(rowProps)}
    </div>
  )
}

const testRenderer = (_someOpts: {}) => {
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
      renderer={testRenderer({})}
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
