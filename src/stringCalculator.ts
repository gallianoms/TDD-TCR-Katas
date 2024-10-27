export const add = (str: string) => {
  if (!str) return 0
  // if (str.length === 1) return Number(str)

  return str
    .split('')
    .map((val) => Number(val))
    .filter((val) => !isNaN(val))
    .reduce((acc, num) => (acc += num), 0)

  // if (str === '//[***]\n1***2***3') {
  //   return 6
  // }

  // if (str === '//[--]\n1--2') {
  //   return 3
  // }

  // let negativeNums = ''
  // let start = str.indexOf('[') + 1
  // let end = str.indexOf(']')

  // let delimiter = str.substring(start, end)

  // str = str.slice(end + 2)

  // const replace = str.replace('\n', ',').replace(delimiter, ',')
  // const split = replace.split(',')

  // negativeNums += split.filter((num) => Number(num) < 0)
  // if (negativeNums)
  //   throw new Error('no allowed negative numbers: ' + negativeNums)

  // const result = split
  //   .filter((num) => Number(num) <= 1000)
  //   .reduce((acc, val) => acc + Number(val), 0)

  // return result
}
