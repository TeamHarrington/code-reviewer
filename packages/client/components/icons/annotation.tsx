import React from 'react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import styled from 'styled-components'

const IconContaienr = styled.div`
  background: ${({ isActive }: { isActive: boolean }) =>
    isActive ? '#004dca' : 'white'};
  height: 32px;
  width: 32px;
  padding-top: 6px;
  padding-left: 6px;
  box-sizing: border-box;
`

const ActiveIcon = styled(ChatBubbleIcon)`
  color: white;
`

const InactiveIcon = styled(ChatBubbleOutlineIcon)``

interface AnnotationIconProps {
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
