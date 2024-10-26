import { add } from '../src/stringCalculator'

describe('string calculator', () => {
  test('pass "" return 0', () => {
    expect(add('')).toBe(0)
  }),
    test('pass 1 return 1', () => {
      expect(add('1')).toBe(1)
    })
})
