export function processNumbers(str: string): number[] {
    return str
        .replaceAll('\n', ',')
        .split(',')
        .map((val) => Number(val))
        .filter((val) => !isNaN(val))
        .filter((num) => num <= 1000)
}