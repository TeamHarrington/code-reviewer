import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { SyntaxHighlight } from '../syntax-highlight'
import { Header } from '../header'
import { PeerTabs } from '../peer-tabs'
import styled from 'styled-components'

const stories = storiesOf('Pages', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const TabContainer = styled.div``

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
    </TabContainer>
  )

  return (
    <>
      <Header title={'CSCA20'} userName={'Kenny'} />
      <PeerTabs contents={[peer1, 'Peer 2', 'Peer 3']} />
    </>
  )
})
