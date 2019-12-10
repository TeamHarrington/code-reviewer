import React from 'react'
import { TextField, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(Grid)`
  padding: 8px;
`

const AnswerField = styled(TextField)`
  width: 100%;
`

interface QuestionAnswerProps {
  index: number
  question: string
  answer?: string
  answers?: string[]
}

export const EditableQuestionAnswer = ({
  index,
  question,
  answer
}: QuestionAnswerProps) => {
  return (
    <Container>
      <Typography>{`${index}. ${question}`}</Typography>
      <AnswerField
        multiline
        defaultValue="Please type your answer here"
        variant="outlined"
        value={answer}
        disabled
      />
      <Typography>{`${2}. ${question}`}</Typography>
      <AnswerField
        multiline
        defaultValue="Please type your answer here"
        variant="outlined"
      />
    </Container>
  )
}
