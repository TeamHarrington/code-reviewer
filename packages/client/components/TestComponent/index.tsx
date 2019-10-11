import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

export interface TestComponentProps {
  phrase: string
}

const TestButton: FunctionComponent<TestComponentProps> = ({
  phrase,
  ...props
}) => {
  return <button {...props}>{phrase}</button>
}

export const TestComponent: FunctionComponent<TestComponentProps> = props => {
  // Using styled components
  const StyledButton = styled(TestButton)`
    background-color: lightblue;
  `
  return <StyledButton {...props}></StyledButton>
}
