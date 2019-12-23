import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 8px;
  padding-bttom: 8px;
`

const LineNumber = styled(Typography)`
  font-style: italic;
`

export interface AnnotationsProp {
  lineNum: Number
  annotations: { from?: String; content: String }[]
}

export const Annotations = ({ lineNum, annotations }: AnnotationsProp) => {
  return (
    <Container>
      <LineNumber>{`Line ${lineNum}`}</LineNumber>
      <Grid>
        {annotations.map(({ content, from }, index) => {
          const author = from ? `${from}: ` : ''
          return <Typography key={index}>{`${author}${content}`}</Typography>
        })}
      </Grid>
    </Container>
  )
}
