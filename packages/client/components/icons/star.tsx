import React from 'react'
import styled from 'styled-components'

import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const BlueStar = styled(StarIcon)`
  color: #004dca;
`

const EmptyStar = styled(StarBorderIcon)`
  color: #656565;
`

interface StarProps {
  index: number
  rating: number
  onClick: (index: any) => void
}

export const Star = ({ index, rating, onClick }: StarProps) => {
  const onStarClick = () => onClick(index)
  return rating > index ? (
    <BlueStar onClick={onStarClick} />
  ) : (
    <EmptyStar onClick={onStarClick} />
  )
}
