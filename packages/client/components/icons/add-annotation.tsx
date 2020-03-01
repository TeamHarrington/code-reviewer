import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'

const IconContaienr = styled.div`
  background: #004dca;
  border: 1px solid white;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  color: white;
`

export interface AnnotationIconProps {
  onClick?: () => void
}

export const AddAnnotationIcon = ({ onClick }: AnnotationIconProps) => {
  return (
    <IconContaienr onClick={onClick}>
      <AddIcon />
    </IconContaienr>
  )
}
