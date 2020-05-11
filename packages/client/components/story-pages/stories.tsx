import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { SyntaxHighlight } from '../syntax-highlight'
import { Header } from '../header'
import { PeerTabs } from '../peer-tabs'
import { FeedbackDrawer } from '../bottom-drawer'
import styled from 'styled-components'

const stories = storiesOf('Pages', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const TabContainer = styled.div`
  height: 100%;
  outline: 5px solid red;
`

stories.add('default', () => {
  const codeString = `def myfunc():
  result = ["str", True, 1, []]
  return result

  `

  const annotations = {
    1: 'Use better variable name',
    3: 'Magic number'
  }

  const peer1 = (
    <TabContainer>
      <SyntaxHighlight
        editable
        annotations={annotations}
        codeString={codeString}
      />
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
    </TabContainer>
  )

  return (
    <>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs contents={[peer1, 'Peer 2', 'Peer 3']} />
    </>
  )
})
