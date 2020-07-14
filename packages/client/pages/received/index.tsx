import { PeerTabs } from '../../components/peer-tabs'
import { Header } from '../../components/header'
import { SyntaxHighlight } from '../../components/syntax-highlight'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { GET_SUBMISSION } from '../../graphql/queries'

// reviews and feedbacks received from users
const PageContainer = styled.div``

const CodePage = () => {
  const { data, loading } = useQuery(GET_SUBMISSION)
  if (loading) {
    return <div>loading ...</div>
  }

  const submission = data.getSubmission

  console.log('=== submission', submission)

  console.log('=== loading', loading)

  const codeString = `def myfunc():
  result = ["str", True, 1, []]
  return result






















  `

  const peer1 = (
    <SyntaxHighlight codeString={submission.files[0].content} editable />
  )
  const peer2 = <SyntaxHighlight codeString={codeString} />
  const peer3 = (
    <SyntaxHighlight codeString={submission.files[0].content} editable />
  )
  return (
    <PageContainer>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs contents={[peer1, peer2, peer3]} />
    </PageContainer>
  )
}

export default CodePage
