import { FileChips } from '.'
import renderer from 'react-test-renderer'
import React from 'react'

test('File Chips Component', () => {
  const component = renderer.create(<FileChips files={[]} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
