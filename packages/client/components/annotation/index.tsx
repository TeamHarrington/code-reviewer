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
  lineNum: number
  content?: string
}

export const Annotation = ({ lineNum, content = '' }: AnnotationProp) => {
  return (
    <Container>
      <LineNumber>{`Line ${lineNum}`}</LineNumber>
      <Typography>{content}</Typography>
    </Container>
  )
}
