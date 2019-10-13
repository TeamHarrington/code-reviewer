import { add, addAsync } from './add'

test('Test async function', () => {
  expect(add(1, 1)).toBe(2)
})

test('waits 1 second before ending the game', async () => {
  const sum = await addAsync(1, 1)
  expect(sum).toBe(2)
})
