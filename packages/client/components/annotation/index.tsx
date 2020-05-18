import React from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 8px;
  padding-bttom: 8px;
`

const LineNumber = styled(Typography)`
  font-style: italic;
`

const ButtonsContainer = styled.div`
  margin-top: 16px;
  width: 176px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`

const StyledButton = styled(Button)`
  width: 80px;
`

const DeleteText = styled.div`
  color: #565656;
`

export interface AnnotationProp {
  lineNum: number
  content?: string
  editable?: boolean
  onChange?: (content: string) => void
}

export const Annotation = ({
  lineNum,
  content = '',
  editable = false,
  onChange = () => null
}: AnnotationProp) => {
  const handleOnChange = (event: any) => {
    onChange(event.target.value)
  }

  const saveButton = (
    <StyledButton
      onClick={() => console.log('clicked')}
      variant="contained"
      disabled={false}
      color={'primary'}>
      Save
    </StyledButton>
  )

  const deleteButton = (
    <StyledButton
      onClick={() => console.log('deleted')}
      variant="outlined"
      disabled={false}>
      <DeleteText>Delete</DeleteText>
    </StyledButton>
  )

  return (
    <Container>
      <LineNumber>{`Line ${lineNum}`}</LineNumber>
      {editable && (
        <TextField
          onChange={handleOnChange}
          fullWidth
          multiline
          rowsMax={7}
          variant="outlined"
          defaultValue={content}
        />
      )}
      {!editable && <Typography>{content}</Typography>}
      <ButtonsContainer>
        {editable && deleteButton}
        {editable && saveButton}
      </ButtonsContainer>
    </Container>
  )
}
