import React from 'react'
import Chip from '@material-ui/core/Chip'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f9f9f9;
`

const StyledChip = styled(Chip)`
  && {
    margin: 4px;
  }
`

interface FileChip {
  name: string
}

interface FileChips {
  files: FileChip[]
  onClick?: (i: number) => void
  selectedChipIndex?: number
}

export const FileChips = ({
  files = [],
  onClick = () => null,
  selectedChipIndex = 0
}: FileChips) => {
  const handChipOnClick = (index: number) => () => {
    onClick(index)
  }

  if (files.length === 1) {
    return null
  }

  return (
    <Container>
      {files.map((file, index) => {
        const isSelected = selectedChipIndex === index

        return (
          <StyledChip
            key={file.name}
            color={'default'}
            variant="outlined"
            disabled={isSelected}
            label={file.name}
            onClick={handChipOnClick(index)}
          />
        )
      })}
    </Container>
  )
}
