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
import { parse, format } from 'date-fns'

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
  const parsedDate = parse(date, 't', new Date())
  const readableDate = format(parsedDate, 'PPPPp')
  return (
    <Link href={href}>
      <StyledButton>
        <Grid container direction="column" alignItems="flex-start">
          <div>{title}</div>
          <div>{`Due date: ${readableDate}`}</div>
        </Grid>
      </StyledButton>
    </Link>
  )
}

export interface AssignmentPanelProps {
  name: string
  peerReviewDeadline?: string
  rateFeedbackDeadline?: string
  givenLink?: string
  receivedLink?: string
}

export const AssignmentPanel = ({
  name = '',
  peerReviewDeadline = '',
  rateFeedbackDeadline = '',
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
          date={peerReviewDeadline}
          href={givenLink}
        />
        <AssignmentButton
          title={'Review Received'}
          date={rateFeedbackDeadline}
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
