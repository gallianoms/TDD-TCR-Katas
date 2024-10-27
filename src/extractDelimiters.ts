export const extractDelimiters = (str: string): string[] => {
  const regex = /\[([^\]]*)]/g

  return str.match(regex)?.map((match) => match.slice(1, -1)) ?? []
}