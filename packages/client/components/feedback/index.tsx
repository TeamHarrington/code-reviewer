import React, { useState } from 'react'
import { MobileDrawer, BottomDrawer } from '../drawers'
import { Button } from '@material-ui/core'
import { TextQuestionAnswer } from '../text-question-answer'
import { Rating } from '../rating'

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

  const children = (
    <>
      {newAnswers.map((answer, i) => (
        <TextQuestionAnswer
          key={i}
          question={questions[i]}
          answer={answer}
          editable={editable}
          index={i}
          onChange={setAnswer}
        />
      ))}
      <Rating />
    </>
  )

  const title = 'Questions'

  return (
    <>
      <MobileDrawer title={title} actionButton={saveButton}>
        {children}
      </MobileDrawer>
      <BottomDrawer title={title}>{children}</BottomDrawer>
    </>
  )
}
