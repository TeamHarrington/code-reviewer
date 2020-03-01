import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { AnnotationIcon } from '../icons'

export interface Props {
  lineHeight?: number
}

const Container = styled(Grid)`
  width: 32px;
  background: #1e1e1e;
  height: 100%;
`

const IndicatorContainer = styled.div`
  position: absolute;
  top: 12px;
`

export const AnnotationIndicators = ({}: Props) => {
  return (
    <Container>
      <IndicatorContainer>
        <AnnotationIcon />
      </IndicatorContainer>
    </Container>
  )
}
