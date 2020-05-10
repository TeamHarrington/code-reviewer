import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { Star } from '../icons'

const Container = styled(Grid)``

const StarContainer = styled(Grid)`
  margin-top: 8px;
  width: 140px;
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
      <Typography paragraph component="div">
        <Box fontWeight={300}>Reflection</Box>
      </Typography>

      <Typography component="div">
        <Box fontWeight={500}>
          How would you rate the feedback from this peer?
        </Box>
      </Typography>

      {/* helpfulness */}
      <Grid container justify="center">
        {messages[rating]}
      </Grid>

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
