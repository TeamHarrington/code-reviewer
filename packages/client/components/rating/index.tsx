import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

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

const messages = [
  'not rated yet',
  'not helpful',
  'a little bit helpful',
  'helpful-ish',
  'helpful',
  'very helpful'
]

export const Rating = () => {
  const onStarClick = (index: number) => {
    setRating(index + 1)
  }
  const [rating, setRating] = useState(0)

  return (
    <div>
      {/* messages */}
      <Grid>{messages[rating]}</Grid>

      {/* stars */}
      <Grid>
        <Star index={0} rating={rating} onClick={onStarClick} />
        <Star index={1} rating={rating} onClick={onStarClick} />
        <Star index={2} rating={rating} onClick={onStarClick} />
        <Star index={3} rating={rating} onClick={onStarClick} />
        <Star index={4} rating={rating} onClick={onStarClick} />
      </Grid>
    </div>
  )
}
