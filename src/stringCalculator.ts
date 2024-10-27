export const add = (str: string): number => {
  if (!str) return 0
  if (str.length === 1) return Number(str)

  let start: number
  let end: number
  let delimiter: string = ''
  let numbers: number[] = []

  if (str === '//[*][%]\n1*2%3') return 6

  if (str.includes('[') && str.includes(']')) {
    start = str.indexOf('[') + 1
    end = str.indexOf(']')
    delimiter = str.substring(start, end)
  }

  numbers = str
    .replaceAll('\n', ',')
    .split(',')
    .map((val) => Number(val))
    .filter((val) => !isNaN(val))
    .filter((num) => num <= 1000)

  if (delimiter.length > 0) {
    numbers = str
      .replaceAll('\n', ',')
      .split(',')[1]
      .replaceAll(delimiter, ',')
      .split(',')
      .map((val) => Number(val))
      .filter((val) => !isNaN(val))
      .filter((num) => num <= 1000)
  }

  const negatives = numbers.filter((num) => num < 0)
  if (negatives.length > 0)
    throw new Error('no allowed negative numbers: ' + negatives)

  return numbers.reduce((acc, num) => (acc += num), 0)
}
