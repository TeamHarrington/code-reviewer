import React from 'react'
import { TextField, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(Grid)`
  padding: 8px;
`

interface SingleAnswerProps {
  editable?: boolean
  answer?: string
}

const SingleAnswer = ({ editable, answer }: SingleAnswerProps) => {
  if (editable) {
    return <TextField fullWidth multiline variant="outlined" value={answer} />
  }
  return <Typography>{answer || '[No response]'}</Typography>
}

export interface TextQuestionAnswerProps {
  index: number // index of this question
  question: string
  answer: string
  editable?: boolean
}

// editable = true implies there can be at most one answer
// because users can only VIEW feedbacks from peers and
// they can only edit their own answer
export const TextQuestionAnswer = ({
  index,
  question,
  answer,
  editable = false
}: TextQuestionAnswerProps) => {
  return (
    <Container>
      <Typography>{`${index}. ${question}`}</Typography>
      <SingleAnswer editable={editable} answer={answer} />
    </Container>
  )
}
