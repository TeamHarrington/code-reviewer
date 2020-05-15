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
  onChange?: (answer: string, i: number) => void
}

export const TextQuestionAnswer = ({
  index,
  question,
  answer = '',
  editable = false,
  onChange = () => null
}: TextQuestionAnswerProps) => {
  const handleOnChange = (event: any) => {
    onChange(event.target.value, index)
  }

  return (
    <Container>
      <Typography>{`${index + 1}. ${question}`}</Typography>
      {editable && (
        <TextField
          onChange={handleOnChange}
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
