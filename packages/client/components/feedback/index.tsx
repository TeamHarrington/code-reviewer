import React, { useState } from 'react'
import styled from 'styled-components'
import { MobileDrawer } from '../bottom-drawer'
import { Button } from '@material-ui/core'
import { TextQuestionAnswer } from '../text-question-answer'
import { Rating } from '../rating'
import units from 'design-units'

export interface FeedbackDrawerProps {
  editable?: boolean
  onSaveClick?: () => void
  questions: string[]
  answers: string[]
}

export const FeedbackDrawer = ({
  onSaveClick = () => null,
  questions,
  answers,
  editable
}: FeedbackDrawerProps) => {
  const [newAnswers, setNewAnswers] = useState([...answers])
  const [isDirty, setIsDirty] = useState(false)

  const saveButton = (
    <Button
      onClick={onSaveClick}
      disabled={!isDirty}
      color={isDirty ? 'primary' : 'default'}>
      Save
    </Button>
  )

  const setAnswer = (answer: string, i: number) => {
    newAnswers[i] = answer
    setNewAnswers(newAnswers)
    setIsDirty(true)
  }

  const children = newAnswers.map((answer, i) => (
    <TextQuestionAnswer
      key={i}
      question={questions[i]}
      answer={answer}
      editable={editable}
      index={i}
      onChange={setAnswer}
    />
  ))

  return (
    <BottomDrawer title={'Questions'} actionButton={saveButton}>
      {children}
      <Rating />
    </BottomDrawer>
  )
}
