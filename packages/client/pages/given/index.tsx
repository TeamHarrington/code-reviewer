import { FunctionComponent } from 'react'
import { PeerTabs } from '../../components/peer-tabs'
import { Header } from '../../components/header'
import { SyntaxHighlight } from '../../components/syntax-highlight'

const HomePage: FunctionComponent = () => {
  const codeString = `def myfunc():
  result = ["str", True, 1, []]
  return result`
  const peer1 = <SyntaxHighlight codeString={codeString} />
  return (
    <>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs contents={[peer1, 'Peer 2', 'Peer 3']} />
    </>
  )
}

export default HomePage
