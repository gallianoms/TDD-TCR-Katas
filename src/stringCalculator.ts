import { extractDelimiters } from './extractDelimiters'
import { validateNegatives } from './validateNegatives'

export const add = (str: string): number => {
  // case base
  if (!str) return 0

  // variables
  let delimiters: string[]
  let numbers: number[]
  let newStr: string

  delimiters = extractDelimiters(str)

  numbers = str
    .replaceAll('\n', ',')
    .split(',')
    .map((val) => Number(val))
    .filter((val) => !isNaN(val))
    .filter((num) => num <= 1000)

  if (delimiters.length > 0) {
    newStr = str.replaceAll('\n', ',').split(',')[1]

    delimiters.forEach((del) => {
      newStr = newStr.replaceAll(del, ',')
    })

    numbers = newStr
      .split(',')
      .map((val) => Number(val))
      .filter((val) => !isNaN(val))
      .filter((num) => num <= 1000)
  }
  validateNegatives(numbers)

  return numbers.reduce((acc, num) => acc + num, 0)
}
