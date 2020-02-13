import { FunctionComponent } from 'react'
import { AssignmentSelection } from '../../components/assignment-selections'
import { Header } from '../../components/header'

const assignmentsData = [
  {
    name: 'Assignment 0',
    reviewDueDate: 'Oct 14, 2019',
    feedbackDueDate: 'Oct 28, 2019',
    givenLink: '/given'
  }
]

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <AssignmentSelection assignments={assignmentsData} />
    </>
  )
}

export default HomePage
