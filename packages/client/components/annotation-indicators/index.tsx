import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { AnnotationIcon, AddAnnotationIcon } from '../icons'

export interface Props {
  totalLines: number
  lineHeight?: number
  currentLineNumber?: number
  setCurrentLineNumber: (lineNumber: number) => void
  editable?: boolean
  selectedAnnotationLineNumber?: number
  setSelectedAnnotationLineNumber: (lineNumber: number) => void
  annotations?: any[]
}

const Container = styled(Grid)`
  padding-top: 10px;
  width: 32px;
  background: #1e1e1e;
  height: 100%;
`

const Placeholder = styled.div`
  height: 23px;
  width: 100%;
  color: white;
  border: 1px solid yellow;
  box-sizing: border-box;
`

const getHeight = (lineHeight: number, lineNumber: number) =>
  `${lineNumber * lineHeight + 14}px`

const IndicatorContainer = styled.div<{ top: string }>`
  position: absolute;
  top: ${props => props.top};
`

export const AnnotationIndicators = ({
  totalLines, // totol number of lines
  currentLineNumber = -1, // line number: hover
  setCurrentLineNumber,
  lineHeight = 23,
  editable = false,
  selectedAnnotationLineNumber = -1,
  setSelectedAnnotationLineNumber,
  annotations = []
}: Props) => {
  const generateRows = () => {
    const rows = []
    for (let i = 1; i <= totalLines; i++) {
      rows.push(
        <Placeholder
          onMouseEnter={() => setCurrentLineNumber(i)}
          onMouseLeave={() => setCurrentLineNumber(-1)}>
          {/* {i} */}
          {editable && currentLineNumber === i && <AddAnnotationIcon />}
        </Placeholder>
      )
    }
    return rows
  }

  return (
    <Container>
      {generateRows()}
      {/* {editable && currentLineNumber > 0 && (
        <IndicatorContainer top={getHeight(lineHeight, currentLineNumber)}>
          <AddAnnotationIcon />
        </IndicatorContainer>
      )}

      {annotations.map(ann => (
        <IndicatorContainer top={getHeight(lineHeight, ann.lineNumber)}>
          <AnnotationIcon
            isActive={selectedAnnotationLineNumber === ann.lineNumber}
            onClick={() => setSelectedAnnotationLineNumber(ann.lineNumber)}
          />
        </IndicatorContainer>
      ))} */}
    </Container>
  )
}
