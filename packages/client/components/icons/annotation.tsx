import React from 'react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import styled from 'styled-components'

const IconContaienr = styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? '#004dca' : 'white')};
  height: 24px;
  width: 24px;
  padding-top: 2px;
  // padding-left: px;
  box-sizing: border-box;
  border: 1px solid white;
`

const ActiveIcon = styled(ChatBubbleIcon)`
  color: white;
  font-size: 20px;
`

const InactiveIcon = styled(ChatBubbleOutlineIcon)`
  font-size: 20px;
  color: black;
`

export interface AnnotationIconProps {
  isActive?: boolean
  onClick?: () => void
}

export const AnnotationIcon = ({
  isActive = false,
  onClick
}: AnnotationIconProps) => {
  return (
    <IconContaienr isActive={isActive} onClick={onClick}>
      {isActive && <ActiveIcon fontSize="inherit" />}
      {!isActive && <InactiveIcon fontSize="inherit" />}
    </IconContaienr>
  )
}
