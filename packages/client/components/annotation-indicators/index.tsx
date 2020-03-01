import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { AnnotationIcon, AddAnnotationIcon } from '../icons'

export interface Props {
  lineHeight?: number
  currentLineNumber?: number
  editable?: boolean
  selectedAnnotationLineNumber?: number
  setSelectedAnnotationLineNumber: (lineNumber: number) => void
  annotations?: any[]
}

const Container = styled(Grid)`
  width: 32px;
  background: #1e1e1e;
  height: 100%;
`

const getHeight = (lineHeight: number, lineNumber: number) =>
  `${lineNumber * lineHeight + 14}px`

const IndicatorContainer = styled.div<{ top: string }>`
  position: absolute;
  top: ${props => props.top};
`

export const AnnotationIndicators = ({
  currentLineNumber = -1,
  lineHeight = 23,
  editable = false,
  selectedAnnotationLineNumber = -1,
  setSelectedAnnotationLineNumber,
  annotations = []
}: Props) => {
  return (
    <Container>
      {editable && currentLineNumber > 0 && (
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
      ))}
    </Container>
  )
}
