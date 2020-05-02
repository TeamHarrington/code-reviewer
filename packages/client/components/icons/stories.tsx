import { storiesOf } from '@storybook/react'
import { Logo, AnnotationIcon, AddAnnotationIcon, Star } from '.'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { GridList, Grid } from '@material-ui/core'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Icons', module)

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs)

const IconContainerDiv = styled.div`
  margin: 40px;
  height: 80px;
  width: 80px;
`

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: #ddd;
`

const StyledTitle = styled.div`
  text-align: center;
`

interface IconContainerProps {
  children: React.ReactNode
  title: string
}

const IconContainer = ({ children, title }: IconContainerProps) => {
  return (
    <IconContainerDiv>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center">
        <div>{children}</div>

        <StyledTitle>{title}</StyledTitle>
      </Grid>
    </IconContainerDiv>
  )
}

stories.add('default', () => {
  const isActive = boolean('is active', false)
  const onClick = action('button clicked')

  return (
    <Background>
      <GridList cellHeight={180}>
        <IconContainer title="logo">
          <Logo />
        </IconContainer>

        <IconContainer title="annotation">
          <AnnotationIcon isActive={isActive} onClick={onClick} />
        </IconContainer>

        <IconContainer title="add annotation">
          <AddAnnotationIcon />
        </IconContainer>

        <IconContainer title="rating star">
          <Star rating={5} index={1} onClick={onClick} />
        </IconContainer>
      </GridList>
    </Background>
  )
})
