import { storiesOf } from '@storybook/react'
import { AssignmentSelection } from '.'
import { LeftDrawer } from '../drawers'
import { withKnobs, text } from '@storybook/addon-knobs'
import styled from 'styled-components'

const stories = storiesOf('Assignment Selections', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const StoryContainer = styled.div`
  background-color: #ddd;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`

const assignmentsData = [
  {
    name: 'Assignment 0',
    reviewDueDate: 'Oct 14, 2019',
    feedbackDueDate: 'Oct 28, 2019'
  },
  {
    name: text('title', 'Assignment 1'),
    reviewDueDate: 'Dec 21, 2019',
    feedbackDueDate: 'Dec 30, 2019'
  }
]

stories.add('default', () => {
  return <AssignmentSelection assignments={assignmentsData} />
})

stories.add('with drawer', () => {
  return (
    <StoryContainer>
      <LeftDrawer>
        <AssignmentSelection assignments={assignmentsData} />
      </LeftDrawer>
    </StoryContainer>
  )
})
