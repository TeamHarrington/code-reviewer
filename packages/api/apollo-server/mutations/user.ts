export interface IAddStudent {
  firstName?: String
  lastName?: String
  utorID: String
  email?: String
  lastLogin: String
}

export const addStudent = (_: any, args: IAddStudent) => {
  return args
}

export interface IAddTA {
  firstName?: String
  lastName?: String
  utorID: String
  email?: String
  lastLogin: String
}

export const addTA = (_: any, args: IAddTA) => {
  return args
}

export interface IAddInstructor {
  firstName?: String
  lastName?: String
  email?: String
  lastLogin: String
}

export const addInstructor = (_: any, args: IAddInstructor) => {
  return args
}

export interface IEditStudent {
  id: String
  firstName?: String
  lastName?: String
  utorID: String
  email?: String
}

export const editStudent = (_: any, args: IEditStudent) => {
  return args
}

export interface IEditTA {
  id: String
  firstName?: String
  lastName?: String
  utorID: String
  email?: String
}

export const editTA = (_: any, args: IEditTA) => {
  return args
}

export interface IEditInstructor {
  id: String
  firstName?: String
  lastName?: String
  email?: String
}

export const editInstructor = (_: any, args: IEditInstructor) => {
  return args
}

export interface IDeleteUser {
  id: String
}

export const deactivateUser = (_: any, args: IDeleteUser) => {
  return args
}
