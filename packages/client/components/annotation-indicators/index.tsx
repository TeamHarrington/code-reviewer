import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { AnnotationIcon, AddAnnotationIcon } from '../icons'

export interface Props {
  totalLines: number
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

const Row = styled.div`
  padding-left: 4px;
  height: 23px;
  width: 100%;
  color: white;
  border: 1px solid yellow;
  box-sizing: border-box;
`

export const AnnotationIndicators = ({
  totalLines, // totol number of lines
  currentLineNumber = -1, // line number: hover
  setCurrentLineNumber,
  editable = false,
  selectedAnnotationLineNumber = -1, // line number: on click
  setSelectedAnnotationLineNumber,
  annotations = []
}: Props) => {
  const getRows = () => {
    const rows = []
    let annotationIndex = 0
    for (let i = 1; i < totalLines; i++) {
      let content
      if (annotations[annotationIndex]?.lineNumber === i - 1) {
        content = (
          <AnnotationIcon isActive={selectedAnnotationLineNumber === i} />
        )
        annotationIndex++
      } else {
        content = editable && currentLineNumber === i && <AddAnnotationIcon />
      }

      rows.push(
        <Row
          onClick={() => setSelectedAnnotationLineNumber(i)}
          key={i}
          onMouseEnter={() => setCurrentLineNumber(i)}
          onMouseLeave={() => setCurrentLineNumber(-1)}>
          {content}
        </Row>
      )
    }

    return rows
  }

  return <Container>{getRows()}</Container>
}
