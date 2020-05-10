import { PeerTabs } from '../../components/peer-tabs'
import { Header } from '../../components/header'
import { SyntaxHighlight } from '../../components/syntax-highlight'
import { FeedbackDrawer } from '../../components/bottom-drawer'

const CodePage = () => {
  const codeString = `def myfunc():
  result = ["str", True, 1, []]
  return result

  `

  const peer1 = <SyntaxHighlight editable codeString={codeString} />
  return (
    <>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs contents={[peer1, 'Peer 2', 'Peer 3']} />

      <FeedbackDrawer
        editable
        questions={[
          'Did the author use meaningful and descriptive variable names?',
          'Is the algorithm in function xxx efficient?'
        ]}
        answers={[
          'Mostly yes, except for a few places the author used “xxx”. I think “yyy” would be more clear.',
          'I think so. An alternative (equally efficient) way would be to xxx.'
        ]}
      />
    </>
  )
}

export default CodePage
