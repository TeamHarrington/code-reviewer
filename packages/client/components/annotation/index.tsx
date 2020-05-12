import React from 'react'
import { Typography, TextField } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 8px;
  padding-bttom: 8px;
`

const LineNumber = styled(Typography)`
  font-style: italic;
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
    </Container>
  )
}
