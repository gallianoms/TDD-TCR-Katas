export const add = (str: string) => {
  if (!str) return 0
  if (str.length === 1) return Number(str)

  return str
    .replace('\n', ',')
    .split(',')
    .reduce((acc, val) => acc + Number(val), 0)
}
