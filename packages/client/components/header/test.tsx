import { Header } from '.'
import renderer from 'react-test-renderer'
import React from 'react'

test('Header Component', () => {
  const component = renderer.create(<Header />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
