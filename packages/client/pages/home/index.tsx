import { Header } from '../../components/header'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { GET_ASSIGNMENTS } from '../../graphql/queries'
import { AssignmentSelection } from '../../components/assignment-selections'

const PageContainer = styled.div``

const HomePage = () => {
  // get all assignments
  const { data: assignmentData, loading } = useQuery(GET_ASSIGNMENTS)
  console.log('data', assignmentData)

  return (
    <PageContainer>
      <Header title={'CSCA20'} userName={'Kenny'} />
      {loading && <p>Loading Assignments</p>}
      {!loading && (
        <AssignmentSelection assignments={assignmentData.getAssignments} />
      )}
    </PageContainer>
  )
}

export default HomePage
