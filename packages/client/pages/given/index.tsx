import { FunctionComponent } from 'react'
import { PeerTabs } from '../../components/peer-tabs'
import { Header } from '../../components/header'
import { SyntaxHighlight } from '../../components/syntax-highlight'
import { BottomDrawer } from '../../components/bottom-drawer'
import { TextQuestionAnswer } from '../../components/text-question-answer'

const HomePage: FunctionComponent = () => {
  const codeString = `def myfunc():
  result = ["str", True, 1, []]
  return result



















  `
  const peer1 = <SyntaxHighlight codeString={codeString} />
  return (
    <>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs contents={[peer1, 'Peer 2', 'Peer 3']} />
      <BottomDrawer title={'Questions'}>
        <TextQuestionAnswer
          editable
          index={1}
          question={
            'Did the author use meaningful and descriptive variable names?'
          }
          answers={[
            'Mostly yes, except for a few places the author used “xxx”. I think “yyy” would be more clear.'
          ]}
        />
      </BottomDrawer>
    </>
  )
}

export default HomePage
