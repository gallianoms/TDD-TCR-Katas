import { processNumbers } from './processNumbers'

const NEW_LINE = '\n'
const COMMA_SEPARATOR = ','

export function processWithDelimiters(
  str: string,
  delimiters: string[]
): number[] {
  let parsed = str
    .replaceAll(NEW_LINE, COMMA_SEPARATOR)
    .split(COMMA_SEPARATOR)[1]

  for (const delimiter of delimiters) {
    parsed = parsed.replaceAll(delimiter, COMMA_SEPARATOR)
  }

  return processNumbers(parsed)
}
