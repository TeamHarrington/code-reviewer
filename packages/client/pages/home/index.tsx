import { Header } from '../../components/header'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { GET_ASSIGNMENTS } from '../../graphql/queries'
import { AssignmentSelection } from '../../components/assignment-selections'
import { format, parse } from 'date-fns'

const PageContainer = styled.div``

const HomePage = () => {
  // get all assignments
  const { data: assignmentData, loading: isAssignmentsLoading } = useQuery(
    GET_ASSIGNMENTS
  )
  console.log('===== assignment data', assignmentData)

  const date = new Date()
  console.log('==== date', date.getTime())
  console.log(format(date, 'PPPPp')) // Sunday, July 19th, 2020 at 2:51 AM
  console.log(format(date, 't')) // 1595141491
  const parsedDate = parse('1595541491', 't', new Date())
  console.log(parsedDate)
  console.log(format(parsedDate, 't'))
  console.log(format(parsedDate, 'PPPPp'))

  return (
    <PageContainer>
      <Header title={'CSCA20'} userName={'Kenny'} />
      {isAssignmentsLoading && <p>Loading Assignments</p>}
      {!isAssignmentsLoading && (
        <AssignmentSelection assignments={assignmentData.getAssignments} />
      )}
    </PageContainer>
  )
}

export default HomePage
