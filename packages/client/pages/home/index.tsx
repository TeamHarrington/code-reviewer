import { Header } from '../../components/header'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import query from '../../graphql/queries'
import gql from 'graphql-tag'

const PageContainer = styled.div``

const getUserQuery = gql`
  query {
    getUser(id: 1) {
      id
      firstName
    }
  }
`

const HomePage = () => {
  const { data, loading, error } = useQuery(getUserQuery)
  console.log(data, loading, error)
  return (
    <PageContainer>
      <Header title={'CSCA20'} userName={'Kenny'} />
      home Page
    </PageContainer>
  )
}

export default HomePage
