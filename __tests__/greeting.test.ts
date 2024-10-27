import { greeting } from '../src/greeting/greeting'

describe('greeting people', () => {
  test('greeting to salva', () => {
    expect(greeting('salva')).toBe('hello salva')
  })
})
