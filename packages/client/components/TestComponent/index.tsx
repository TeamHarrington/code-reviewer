import React, { FunctionComponent } from 'react'

export interface TestComponentProps {
  phrase: string
}

export const TestComponent: FunctionComponent<TestComponentProps> = ({
  phrase
}) => {
  return <button>{phrase}</button>
}
