import { PeerTabs } from '.'
import renderer from 'react-test-renderer'
import React from 'react'

test('Peer Tabs Component', () => {
  const component = renderer.create(<PeerTabs content={[]} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
