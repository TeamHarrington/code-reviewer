import React, { useState } from 'react'
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
  fileName: string
}

interface FileChips {
  files: FileChip[]
}

export const FileChips = ({ files = [] }: FileChips) => {
  const [selectedChipIndex, setSelectedChipIndex] = useState(0)

  const handChipOnClick = (_: any, index: number) => () => {
    setSelectedChipIndex(index)
  }

  return (
    <Container>
      {files.map((file, index) => {
        const isSelected = selectedChipIndex === index

        return (
          <StyledChip
            color={'default'}
            variant="outlined"
            disabled={isSelected}
            label={file.fileName}
            onClick={handChipOnClick(file, index)}
          />
        )
      })}
    </Container>
  )
}
