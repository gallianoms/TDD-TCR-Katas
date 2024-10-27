import {extractDelimiters} from './extractDelimiters'
import {validateNegatives} from './validateNegatives'
import {processNumbers} from "./processNumbers";
import {processWithDelimiters} from "./processWithDelimiters";

export const add = (str: string): number => {
  // case base
  if (!str) return 0

  // variables
  let numbers: number[]

  const delimiters = extractDelimiters(str)
  numbers = processNumbers(str);

  if (delimiters.length > 0) {
    let newStr = processWithDelimiters(str, delimiters);

    numbers = newStr
      .split(',')
      .map((val) => Number(val))
      .filter((val) => !isNaN(val))
      .filter((num) => num <= 1000)
  }

  validateNegatives(numbers)

  return numbers.reduce((acc, num) => acc + num, 0)
}
