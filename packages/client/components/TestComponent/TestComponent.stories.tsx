import React from 'react'
import { storiesOf } from '@storybook/react'
import { TestComponent } from '.'

const stories = storiesOf('Components', module)

stories.addParameters({ info: { inline: true } })
stories.add('TestComponent', () => (
  <TestComponent phrase="Hello World"></TestComponent>
))
