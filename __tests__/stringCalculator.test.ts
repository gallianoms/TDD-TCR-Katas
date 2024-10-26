import { add } from '../src/stringCalculator'

describe('string calculator', () => {
  //   describe('empty or single numbers', () => {
  //     test('should return 0 for empty string', () => {
  //       expect(add('')).toBe(0)
  //     })

  //     test('should return same number for single digits', () => {
  //       expect(add('1')).toBe(1)
  //       expect(add('2')).toBe(2)
  //     })
  //   })

  //   describe('two numbers', () => {
  //     test('should return sum of two numbers', () => {
  //       expect(add('1,2')).toBe(3)
  //       expect(add('3,4')).toBe(7)
  //     })
  //   })

  //   describe('multiple numbers', () => {
  //     test('should return sum of multiple numbers', () => {
  //       expect(add('1,2,3')).toBe(6)
  //       expect(add('3,4,5')).toBe(12)
  //     })
  //   })

  //   describe('jump lines', () => {
  //     test('should return sum of multiple numbers with jump lines', () => {
  //       expect(add('1\n2,3')).toBe(6)
  //       expect(add('1\n2,\n3')).toBe(6)
  //     })
  //   })

  //   describe('throw exception', () => {
  //     test('should throw exception for negative numbers and show numbers on exception message', () => {
  //       expect(() => add('1,2,-3')).toThrow('no allowed negative numbers: -3')
  //       expect(() => add('1,-2,-3')).toThrow('no allowed negative numbers: -2,-3')
  //     })
  //   })

  //   describe('ignore numbers greater than 1000', () => {
  //     test('should return sum ignoring numbers greater than 1000', () => {
  //       expect(add('2,1001')).toBe(2)
  //       expect(add('2,3,1000')).toBe(1005)
  //       expect(add('2,3,999')).toBe(1004)
  //       expect(add('2,3,1001')).toBe(5)
  //     })
  //   })

  describe('delimiters with format //[delimiter]\n', () => {
    test('sum numbers with format //[***]\n1***2***3', () => {
      expect(add('//[***]\n1***2***3')).toBe(6)
    })
  })
})
