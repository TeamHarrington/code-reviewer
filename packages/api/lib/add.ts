// this file is to demonstrate jest testing in backend

export const add = (num1: number, num2: number): number => {
  return num1 + num2
}

export const addAsync = async (num1: number, num2: number): Promise<number> => {
  return num1 + num2
}
