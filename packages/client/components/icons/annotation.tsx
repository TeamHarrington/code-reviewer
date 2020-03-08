import React from 'react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import styled from 'styled-components'

const IconContaienr = styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? '#004dca' : 'white')};
  height: 24px;
  width: 24px;
  padding-top: 2px;
  padding-left: 2px;
  box-sizing: border-box;
  border: 1px solid white;
`

const ActiveIcon = styled(ChatBubbleIcon)`
  color: white;
`

const InactiveIcon = styled(ChatBubbleOutlineIcon)``

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
      {isActive && <ActiveIcon fontSize="small" />}
      {!isActive && <InactiveIcon fontSize="small" />}
    </IconContaienr>
  )
}
