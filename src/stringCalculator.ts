export const add = (str: string) => {
  if (!str) return 0

  const numbers = str
    .split(',')
    .map((val) => Number(val))
    .filter((val) => !isNaN(val))

  const negatives = numbers.filter((num) => num < 0)
  if (negatives.length > 0)
    throw new Error('no allowed negative numbers: ' + negatives)

  return numbers.reduce((acc, num) => (acc += num), 0)
}
