import { add } from '../src/stringCalulator/stringCalculator'

describe('string calculator', () => {
  describe('empty numbers', () => {
    test('should return 0 for empty string', () => {
      expect(add('')).toBe(0)
      expect(add(' ')).toBe(0)
      expect(add('\n')).toBe(0)
    })
  })

  describe('single numbers', () => {
    test('should return same number for single digits', () => {
      expect(add('1')).toBe(1)
      expect(add('2')).toBe(2)
      expect(add('3')).toBe(3)
    })
  })

  describe('two numbers', () => {
    test('should return sum of two numbers', () => {
      expect(add('1,2')).toBe(3)
      expect(add('3,4')).toBe(7)
      expect(add('5,6')).toBe(11)
    })
  })

  describe('multiple numbers', () => {
    test('should return sum of multiple numbers', () => {
      expect(add('1,2,3')).toBe(6)
      expect(add('3,4,5')).toBe(12)
      expect(add('1,2,3,4')).toBe(10)
    })
  })

  describe('jump lines', () => {
    test('should return sum of multiple numbers with jump lines', () => {
      expect(add('1\n2,3')).toBe(6)
      expect(add('1\n2,\n3')).toBe(6)
      expect(add('1\n2\n3')).toBe(6)
    })
  })

  describe('throw exception', () => {
    test('should throw exception for negative numbers and show numbers on exception message', () => {
      expect(() => add('1,2,-3')).toThrow('no allowed negative numbers: -3')
      expect(() => add('1,-2,-3')).toThrow('no allowed negative numbers: -2,-3')
      expect(() => add('-1,-2,-3')).toThrow(
        'no allowed negative numbers: -1,-2,-3'
      )
    })
  })

  describe('ignore numbers greater than 1000', () => {
    test('should return sum ignoring numbers greater than 1000', () => {
      expect(add('2,1001')).toBe(2)
      expect(add('2,3,1000')).toBe(1005)
      expect(add('2,3,1001')).toBe(5)
    })
  })

  describe('delimiters with format //[delimiter]\n', () => {
    test('sum numbers with format //[delimiter]\n', () => {
      expect(add('//[***]\n1***2***3')).toBe(6)
      expect(add('//[--]\n1--2')).toBe(3)
      expect(add('//[##]\n1##2##3')).toBe(6)
    })
  })

  describe('multiple delimiters with format //[delim1][delim2]\n', () => {
    test('sum numbers with format //[delim1][delim2]\n length single character', () => {
      expect(add('//[*][%]\n1*2%3')).toBe(6)
      expect(add('//[#][$]\n1#2$3')).toBe(6)
      expect(add('//[@][&]\n1@2&3')).toBe(6)
    })

    test('sum numbers with format //[delim1][delim2]\n length multiple characters', () => {
      expect(add('//[****][%%%%]\n1****2%%%%3')).toBe(6)
      expect(add('//[###][$$$]\n1###2$$$3')).toBe(6)
      expect(add('//[@@@][&&&]\n1@@@2&&&3')).toBe(6)
    })
  })
})
