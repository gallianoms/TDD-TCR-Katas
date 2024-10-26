import { add } from '../src/stringCalculator'

describe('string calculator', () => {
  describe('empty or single numbers', () => {
    test('should return 0 for empty string', () => {
      expect(add('')).toBe(0)
    })

    test('should return same number for single digits', () => {
      expect(add('1')).toBe(1)
      expect(add('2')).toBe(2)
    })
  })

  describe('two numbers', () => {
    test('should return sum of two numbers', () => {
      expect(add('1,2')).toBe(3)
      expect(add('3,4')).toBe(7)
    })
  })

  describe('multiple numbers', () => {
    test('should return sum of multiple numbers', () => {
      expect(add('1,2,3')).toBe(6)
      expect(add('3,4,5')).toBe(12)
    })
  })
})
