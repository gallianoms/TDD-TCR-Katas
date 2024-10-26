export const add = (str: string) => {
  if (!str) return 0
  if (str.length === 1) return Number(str)

  let negativeNums = ''

  const replace = str.replace('\n', ',')
  const split = replace.split(',')

  negativeNums += split.filter((num) => Number(num) < 0)
  if (negativeNums)
    throw new Error('no allowed negative numbers: ' + negativeNums)

  const result = split
    .filter((num) => Number(num) <= 1000)
    .reduce((acc, val) => acc + Number(val), 0)

  return result
}
