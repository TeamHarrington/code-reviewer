import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 8px;
  padding-bttom: 8px;
`

const LineNumber = styled(Typography)`
  font-style: italic;
`

export interface AnnotationProp {
  annotation: object
}

export const Annotation = ({ annotation }: AnnotationProp) => {
  const lineNum = Object.keys(annotation)[0]

  return (
    <Container>
      <LineNumber>{`Line ${lineNum}`}</LineNumber>
      <Typography>{annotation[lineNum]}</Typography>
    </Container>
  )
}
