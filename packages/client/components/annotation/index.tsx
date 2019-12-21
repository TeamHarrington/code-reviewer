import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(Grid)`
  padding: 8px;
`

const SingleAnnotationContainer = styled.div`
  padding-top: 8px;
  padding-bttom: 8px;
`

const LineNumber = styled(Typography)`
  font-style: italic;
`

interface SingleAnnotationProp {
  lineNum: Number
  content: String
}

const SingleAnnotation = ({ lineNum, content }: SingleAnnotationProp) => {
  return (
    <SingleAnnotationContainer>
      <LineNumber>{`Line ${lineNum}`}</LineNumber>
      <Typography>{content}</Typography>
    </SingleAnnotationContainer>
  )
}

export interface AnnotationsProps {
  annotations: [SingleAnnotationProp]
}

export const Annotations = (props: AnnotationsProps) => {
  return (
    <Container>
      {props.annotations.map((annotation, index) => (
        <SingleAnnotation key={index} {...annotation} />
      ))}
    </Container>
  )
}
