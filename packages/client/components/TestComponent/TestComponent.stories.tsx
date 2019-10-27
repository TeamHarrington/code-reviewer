import { storiesOf } from '@storybook/react'
import { TestComponent } from '.'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

const stories = storiesOf('Components', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('TestComponent', () => (
  <div>
    <TestComponent
      phrase={text('greeting', 'Hellow World')}
      href="https://google.com"
      _target="blank"
    />
    <div>sample component to demo knobs</div>
    <div>
      <span>age: </span>
      <span>{number('age', 1)}</span>
    </div>
    <div>
      <span>an example to demo checkbox?</span>
      <span>{boolean('do you know how to use storybook knobs?', true)}</span>
    </div>
  </div>
))
