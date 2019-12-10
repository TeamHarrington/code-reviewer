import { storiesOf } from '@storybook/react'
import { EditableQuestionAnswer } from '.'
import { withKnobs, text, select } from '@storybook/addon-knobs'

const stories = storiesOf('Question Answer', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

stories.add('default', () => {
  return (
    <div>
      <EditableQuestionAnswer
        index={1}
        question={
          'Did the author use meaningful and descriptive variable names?'
        }></EditableQuestionAnswer>
    </div>
  )
})
