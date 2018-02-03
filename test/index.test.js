import { task } from "../dist"

test("without parameters", () => {
  expect.assertions(1)
  return expect(task()).resolves.toBe(undefined)
})
