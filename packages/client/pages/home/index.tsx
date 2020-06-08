import { Header } from '../../components/header'
import styled from 'styled-components'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_ASSIGNMENTS, ADD_ASSIGNMENT } from '../../graphql/queries'
import { Button } from '@material-ui/core'
import { AssignmentSelection } from '../../components/assignment-selections'

const PageContainer = styled.div``

const HomePage = () => {
  const { data, loading } = useQuery(GET_ASSIGNMENTS)

  const [addAssignment, { data: newAssignmentData }] = useMutation(
    ADD_ASSIGNMENT
  )

  console.log('response of add new ssignment', newAssignmentData)

  return (
    <PageContainer>
      <Header title={'CSCA20'} userName={'Kenny'} />
      {loading && <p>Loading Assignments</p>}
      {!loading && <AssignmentSelection assignments={data.getAssignments} />}
      {/* TODO: this is for testing only */}
      <Button onClick={() => addAssignment()}>add new assignment</Button>
      home Page
    </PageContainer>
  )
}

export default HomePage
