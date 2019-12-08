import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'

const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`

const TitleText = styled.div`
  font-size: 20px;
`

const StyledButton = styled(Button)`
  && {
    text-transform: none;
  }
`

interface AssignmentButtonProps {
  main: string
  date: string
}

const AssignmentButton = ({ main = '', date = '' }: AssignmentButtonProps) => {
  return (
    <StyledButton>
      <ButtonContent>
        <div>{`Review ${main}`}</div>
        <div>{`Due date: ${date}`}</div>
      </ButtonContent>
    </StyledButton>
  )
}

export interface AssignmentPanelProps {
  name: string
  reviewDueDate?: string
  feedbackDueDate?: string
}

export const AssignmentPanel = ({
  name = '',
  reviewDueDate = '',
  feedbackDueDate = ''
}: AssignmentPanelProps) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id={`${name}`}>
      <TitleText>{`Review: ${name}`}</TitleText>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <DetailContainer>
        <AssignmentButton main={'Given'} date={reviewDueDate} />
        <AssignmentButton main={'Received'} date={feedbackDueDate} />
      </DetailContainer>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

export interface AssignmentSelectionProps {
  assignments: AssignmentPanelProps[]
}

export const AssignmentSelection = ({
  assignments
}: AssignmentSelectionProps) => {
  if (assignments.length === 0) {
    return null
  }
  return (
    <>
      {assignments.map(assignment => (
        <AssignmentPanel {...assignment} />
      ))}
    </>
  )
}
