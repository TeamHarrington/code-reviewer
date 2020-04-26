import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@material-ui/core'

import { Star } from '../icons'

const Container = styled(Grid)`
  outline: 1px solid black;
`

const Title = styled.div`
  font-size: 18px;
`

const Description = styled.div`
  font-size: 16px;
`

const StarContainer = styled(Grid)`
  width: 140px;
  outline: 1px solid red;
`

// TODO: use better messages
const messages = [
  'Not rated yet',
  'Not helpful',
  'A little bit helpful',
  'Helpful-ish',
  'Helpful',
  'Very helpful'
]

export const Rating = () => {
  const onStarClick = (index: number) => {
    setRating(index + 1)
  }
  const [rating, setRating] = useState(0)

  return (
    <Container container direction="column">
      <div>Reflection</div>

      <div>How would you rate the feedback from this peer?</div>

      {/* helpfulness */}
      <div>{messages[rating]}</div>

      {/* stars */}
      <StarContainer container justify="center">
        <Star index={0} rating={rating} onClick={onStarClick} />
        <Star index={1} rating={rating} onClick={onStarClick} />
        <Star index={2} rating={rating} onClick={onStarClick} />
        <Star index={3} rating={rating} onClick={onStarClick} />
        <Star index={4} rating={rating} onClick={onStarClick} />
      </StarContainer>
    </Container>
  )
}
