import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

export interface TestComponentProps {
  phrase: string
  onMouseEnter?: (event: unknown) => void
  onMouseLeave?: (event: unknown) => void
  href?: string
  _target?: string
}

const TestLink: FunctionComponent<TestComponentProps> = ({
  phrase,
  ...props
}) => {
  return <a {...props}>{phrase}</a>
}

export const TestComponent: FunctionComponent<TestComponentProps> = props => {
  // Using styled components
  const StyledButton = styled(TestLink)`
    font-color: lightblue;
  `
  return <StyledButton {...props}></StyledButton>
}
