import React from 'react'
import { TextField, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(Grid)`
  padding: 8px;
`

const AnswerField = styled(TextField)`
  width: 100%;
`

interface SingleAnswerProps {
  editable: boolean
  answer: string
  from: string
}

const SingleAnswer = ({ editable, answer, from }: SingleAnswerProps) => {
  if (editable) {
    return <AnswerField multiline variant="outlined" value={answer} />
  }
  const author = from ? `${from}: ` : ''
  return <Typography>{`${author}${answer || '[No response]'}`}</Typography>
}

export interface QuestionAnswerProps {
  index: number // index of this question
  question: string
  answers: string[]
  editable?: boolean
}

// editable = true implies there can be at most one answer
// because users can only VIEW feedbacks from peers and
// they can only edit their own answer
export const TextQuestionAnswer = ({
  index,
  question,
  answers,
  editable = false
}: QuestionAnswerProps) => {
  return (
    <Container>
      <Typography>{`${index}. ${question}`}</Typography>
      {answers.map((answer, i) => (
        <SingleAnswer
          key={i}
          editable={editable}
          answer={answer}
          from={answers.length > 1 ? `Peer ${i + 1}` : ''}
        />
      ))}
    </Container>
  )
}
