import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@material-ui/core'

import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  box-sizing: border-box;
`

const BlueStar = styled(StarIcon)`
  color: #004dca;
`

interface StarProps {
  index: number
  rating: number
  onClick: (index: any) => void
}

const Star = ({ index, rating, onClick }: StarProps) => {
  const onStarClick = () => onClick(index)
  return rating > index ? (
    <BlueStar onClick={onStarClick} />
  ) : (
    <StarBorderIcon onClick={onStarClick} />
  )
}

export const Rating = () => {
  const onStarClick = (index: number) => {
    setRating(index + 1)
  }
  const [rating, setRating] = useState(0)

  return (
    <Container>
      <Star index={0} rating={rating} onClick={onStarClick} />
      <Star index={1} rating={rating} onClick={onStarClick} />
      <Star index={2} rating={rating} onClick={onStarClick} />
      <Star index={3} rating={rating} onClick={onStarClick} />
      <Star index={4} rating={rating} onClick={onStarClick} />
    </Container>
  )
}
