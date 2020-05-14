import { PeerTabs } from '../../components/peer-tabs'
import { Header } from '../../components/header'
import { SyntaxHighlight } from '../../components/syntax-highlight'
import styled from 'styled-components'

const PageContainer = styled.div``

const CodePage = () => {
  const codeString = `def myfunc():
  result = ["str", True, 1, []]
  return result






















  `

  const peer1 = <SyntaxHighlight editable codeString={codeString} />
  const peer2 = <SyntaxHighlight codeString={codeString} />
  return (
    <PageContainer>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs contents={[peer1, 'Peer 2', 'Peer 3']} />
    </PageContainer>
  )
}

export default CodePage
