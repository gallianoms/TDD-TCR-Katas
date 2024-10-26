export const add = (str: string) => {
  if (!str) return 0
  if (str.length === 1) return Number(str)

  const replace = str.replace('\n', ',')
  const split = replace.split(',')
  const result = split.reduce((acc, val) => acc + Number(val), 0)

  return result
}
