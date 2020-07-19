import { PeerTabs } from '../../components/peer-tabs'
import { Header } from '../../components/header'
import { SyntaxHighlight } from '../../components/syntax-highlight'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { GET_SUBMISSIONS } from '../../graphql/queries'

// reviews and feedbacks given to peers
const PageContainer = styled.div``

const CodePage = () => {
  const { data, loading } = useQuery(GET_SUBMISSIONS)

  console.log('=== data', data)
  console.log('=== loading', loading)

  const peer1 = <SyntaxHighlight files={[]} editable />
  const peer2 = <SyntaxHighlight files={[]} />
  return (
    <PageContainer>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs contents={[peer1, peer2, 'Peer 3']} />
    </PageContainer>
  )
}

export default CodePage
