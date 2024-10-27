import {extractDelimiters} from './extractDelimiters'
import {validateNegatives} from './validateNegatives'
import {processNumbers} from "./processNumbers";

export const add = (str: string): number => {
  // case base
  if (!str) return 0

  // variables
  let numbers: number[]
  let newStr: string

  const delimiters = extractDelimiters(str)
  numbers = processNumbers(str);

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
