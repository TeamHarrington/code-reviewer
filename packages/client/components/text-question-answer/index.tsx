import React from 'react'
import { TextField, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(Grid)`
  padding: 8px;
`

export interface TextQuestionAnswerProps {
  index: number // index of this question
  question: string
  answer?: string
  editable?: boolean
}

export const TextQuestionAnswer = ({
  index,
  question,
  answer = '',
  editable = false
}: TextQuestionAnswerProps) => {
  return (
    <Container>
      <Typography>{`${index}. ${question}`}</Typography>
      {editable && (
        <TextField fullWidth multiline variant="outlined" value={answer} />
      )}
      {!editable && <Typography>{answer || '[No response]'}</Typography>}
    </Container>
  )
}
