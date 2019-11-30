import { storiesOf } from '@storybook/react'
import { TestComponent } from '.'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

const stories = storiesOf('Components', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const ActionButton = styled.button`
  width: 100;
`

stories.add('TestComponent', () => {
  const checked = boolean('do you know how to use storybook knobs?', true)

  return (
    <div>
      <TestComponent
        phrase={text('greeting', 'Hellow World')}
        _target="blank"
      />
      <div>sample component to demo knobs</div>
      <div>
        <span>age: </span>
        <span>{number('age', 1)}</span>
      </div>
      <div>
        <span>an example to demo checkbox? {`${checked ? 'yes' : 'no'}`}</span>
        <span></span>
      </div>
      <div>
        <span>an example to demo action logger</span>
        <span>
          <ActionButton onClick={action('button clicked')}>
            You can see the log in action logger
          </ActionButton>
        </span>
      </div>
    </div>
  )
})
