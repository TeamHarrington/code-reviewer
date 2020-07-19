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
