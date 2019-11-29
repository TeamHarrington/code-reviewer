import { SyntaxHighlight } from '.'
import renderer from 'react-test-renderer'
import React from 'react'

test('Syntax Highlight Component', () => {
  const component = renderer.create(<SyntaxHighlight codeString="" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
