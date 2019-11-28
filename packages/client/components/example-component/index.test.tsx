import { TestComponent } from '.'
import renderer from 'react-test-renderer'
import React from 'react'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <TestComponent
      phrase="Hello World"
      href="https://google.com"
      onMouseEnter={() => undefined}
      onMouseLeave={() => undefined}
      _target="blank"></TestComponent>
  )
  let tree = component.toJSON()!
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseEnter()
  // re-rendering
  tree = component.toJSON()!
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseLeave()
  // re-rendering
  tree = component.toJSON()!
  expect(tree).toMatchSnapshot()
})
