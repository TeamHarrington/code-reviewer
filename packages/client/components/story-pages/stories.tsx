import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { SyntaxHighlight } from '../syntax-highlight'
import { Header } from '../header'
import { PeerTabs } from '../peer-tabs'
import { FeedbackDrawer } from '../bottom-drawer'

const stories = storiesOf('Pages', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
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
})
