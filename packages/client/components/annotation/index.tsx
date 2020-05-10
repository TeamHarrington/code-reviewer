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
  annotation: {
    lineNum: number
    content: string
  }
}

export const Annotation = ({ annotation }: AnnotationProp) => {
  return (
    <Container>
      <LineNumber>{`Line ${annotation.lineNum}`}</LineNumber>
      <Typography>{annotation.content}</Typography>
    </Container>
  )
}
