import { storiesOf } from '@storybook/react'
import { AssignmentSelection } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Assignment Selections', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

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
