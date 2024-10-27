export const add = (str: string): any => {
  if (!str) return 0
  if (str.length === 1) return Number(str)

  let delimiters: string[] = []
  let numbers: number[] = []

  delimiters = extractDelimiters(str)
  console.log(delimiters)

  numbers = str
    .replaceAll('\n', ',')
    .split(',')
    .map((val) => Number(val))
    .filter((val) => !isNaN(val))
    .filter((num) => num <= 1000)

  if (delimiters.length > 0) {
    console.log(delimiters)

    let newStr = str.replaceAll('\n', ',').split(',')[1]
    delimiters.forEach((del) => {
      newStr = newStr.replaceAll(del, ',')
    })
    numbers = newStr
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

export const extractDelimiters = (str: string): string[] => {
  const regex = /\[([^\]]*)\]/g

  return str.match(regex)?.map((match) => match.slice(1, -1)) ?? []
}
