import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button,
  Grid
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'
import Link from 'next/link'
import { LeftDrawer } from '../drawers'

const TitleText = styled.div`
  font-size: 20px;
`

const StyledButton = styled(Button)`
  && {
    text-transform: none;
  }
`

const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
  && {
    padding: 8px;
  }
`

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  && {
    padding: 8px;
  }
`

interface AssignmentButtonProps {
  title: string
  date: string
  href?: string
}

const AssignmentButton = ({
  title = '',
  date = '',
  href = ''
}: AssignmentButtonProps) => {
  return (
    <Link href={href}>
      <StyledButton>
        <Grid container direction="column" alignItems="flex-start">
          <div>{title}</div>
          <div>{`Due date: ${date}`}</div>
        </Grid>
      </StyledButton>
    </Link>
  )
}

export interface AssignmentPanelProps {
  name: string
  reviewDueDate?: string
  feedbackDueDate?: string
  givenLink?: string
  receivedLink?: string
}

export const AssignmentPanel = ({
  name = '',
  reviewDueDate = '',
  feedbackDueDate = '',
  givenLink = '',
  receivedLink = ''
}: AssignmentPanelProps) => (
  <ExpansionPanel>
    <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id={`${name}`}>
      <TitleText>{`Review: ${name}`}</TitleText>
    </StyledExpansionPanelSummary>
    <StyledExpansionPanelDetails>
      <Grid container direction="column">
        <AssignmentButton
          title={'Review Given'}
          date={reviewDueDate}
          href={givenLink}
        />
        <AssignmentButton
          title={'Review Received'}
          date={feedbackDueDate}
          href={receivedLink}
        />
      </Grid>
    </StyledExpansionPanelDetails>
  </ExpansionPanel>
)

export interface AssignmentSelectionProps {
  assignments: AssignmentPanelProps[]
}

export const AssignmentSelection = ({
  assignments
}: AssignmentSelectionProps) => (
  <>
    {assignments.map(assignment => (
      <AssignmentPanel key={assignment.name} {...assignment} />
    ))}
  </>
)
