import {extractDelimiters} from './extractDelimiters'
import {validateNegatives} from './validateNegatives'
import {processNumbers} from "./processNumbers";
import {processWithDelimiters} from "./processWithDelimiters";

export const add = (str: string): number => {
  if (!str) return 0

  const delimiters = extractDelimiters(str)
  const numbers = delimiters.length > 0
  ? processWithDelimiters(str, delimiters)
  : processNumbers(str)

  validateNegatives(numbers)

  return numbers.reduce((acc, num) => acc + num, 0)
}
