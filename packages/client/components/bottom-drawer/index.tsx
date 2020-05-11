import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'
import { Button } from '@material-ui/core'
import { TextQuestionAnswer } from '../text-question-answer'
import CloseIcon from '@material-ui/icons/Close'
import { Annotation } from '../annotation'
import { Rating } from '../rating'

const Container = styled.div<{ drawerHeight: string }>`
  height: ${props => props.drawerHeight};
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  padding-top: 6px;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  transition: height 0.3s;
  position: fixed;
  bottom: 0px;
  width: 100%;
`

const ExtendButton = styled.div`
  width: 40px;
  height: 8px;
  background-color: #8f8f8f;
  border-radius: 5px;
  margin: auto;
  // enlarged touchable area for a11y
  &:before {
    content: '';
    height: 22px;
    width: 48px;
    position: absolute;
    top: 0px;
    left: calc(50% - 24px);
  }
`

const ChildContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 344px;
`

export interface BottomDrawerProps {
  title: string
  children: React.ReactNode
  actionButton?: React.ReactNode
  isClosed?: boolean
  fixedHeight?: string
}

// this components has 2 modes: adjustable height and fixed height
// e.g. passing fixedHeight: '200px' will hide the button to adjust
// hegith, so the drawer's height always stay the same
export const BottomDrawer = ({
  title,
  children,
  actionButton,
  isClosed = false,
  fixedHeight
}: BottomDrawerProps) => {
  const minimizedHeight = '52px'
  const expandedHeight = '400px'
  const [drawerHeight, setDrawerHeight] = useState(
    fixedHeight || minimizedHeight
  )

  const handlers = useSwipeable({
    onSwipedUp: () => setDrawerHeight(expandedHeight),
    onSwipedDown: () => setDrawerHeight(minimizedHeight),
    trackMouse: true
  })

  const toggleHeight = () => {
    setDrawerHeight(prev => {
      return prev === minimizedHeight ? expandedHeight : minimizedHeight
    })
  }

  if (isClosed) {
    return null
  }

  return (
    <Container drawerHeight={drawerHeight}>
      <Grid>
        {!fixedHeight && <ExtendButton onClick={toggleHeight} {...handlers} />}

        <Grid container justify="space-between" alignItems="center">
          {title}
          {actionButton}
        </Grid>
        <ChildContent>{children}</ChildContent>
      </Grid>
    </Container>
  )
}

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

export interface AnnotationDrawerProps {
  onCloseClick: () => void
  annotation: any
}

export const AnnotationDrawer = ({
  onCloseClick,
  annotation
}: AnnotationDrawerProps) => {
  const closeButton = (
    <Button onClick={onCloseClick}>
      <CloseIcon />
    </Button>
  )

  const children = <Annotation annotation={annotation} />

  return (
    <BottomDrawer title={'Annotation'} actionButton={closeButton}>
      {children}
    </BottomDrawer>
  )
}
