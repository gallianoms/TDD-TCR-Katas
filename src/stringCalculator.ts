export const add = (str: string) => {
  if (!str) return 0
  if (str.length === 1) return Number(str)

  const arrStr = str.split(',')
  let sum = 0
  for (let i = 0; i < arrStr.length; i++) {
    sum += Number(arrStr[i])
  }
  return sum
}
