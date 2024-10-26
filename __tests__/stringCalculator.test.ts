import { add } from '../src/stringCalculator'

describe('string calculator', () => {
  test('pass "" return 0', () => {
    expect(add('')).toBe(0)
  })
})
