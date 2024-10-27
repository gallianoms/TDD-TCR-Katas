import { extractDelimiters } from './extractDelimiters'

export const add = (str: string): number => {
  // case base
  if (!str) return 0

  // variables
  let delimiters: string[]
  let numbers: number[]
  let negatives: number[]
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

  negatives = numbers.filter((num) => num < 0)

  if (negatives.length > 0)
    throw new Error('no allowed negative numbers: ' + negatives)

  return numbers.reduce((acc, num) => acc + num, 0)
}
