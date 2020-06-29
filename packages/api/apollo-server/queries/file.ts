import { files } from '../mock-data'

export interface IGetFiles {
  ids: string[]
}

export const getFiles = async (_: any, args: IGetFiles) => {
  const result = [] as any[]
  args.ids.forEach(fileID => {
    const file = files.find(file => file.id === fileID)
    // TODO: consider throwing error if a args.ids are invalid
    if (file) {
      result.push(file)
    }
  })
  return result
}

export interface IGetAnnotations {
  fileID: string
}

// get annotations by fileID
export const getAnnotations = async (_: any, args: IGetAnnotations) => {
  return args
}
