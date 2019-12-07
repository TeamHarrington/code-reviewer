import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f9f9f9;
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
          <Chip
            color={'default'}
            disabled={isSelected}
            label={file.fileName}
            onClick={handChipOnClick(file, index)}
            style={{ margin: 4 }}
          />
        )
      })}
    </Container>
  )
}
