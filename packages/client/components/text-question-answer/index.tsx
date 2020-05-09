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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextQuestionAnswer = ({
  index,
  question,
  answer = '',
  editable = false,
  onChange
}: TextQuestionAnswerProps) => {
  return (
    <Container>
      <Typography>{`${index}. ${question}`}</Typography>
      {editable && (
        <TextField
          onChange={onChange}
          fullWidth
          multiline
          variant="outlined"
          defaultValue={answer}
        />
      )}
      {!editable && <Typography>{answer || '[No response]'}</Typography>}
    </Container>
  )
}
