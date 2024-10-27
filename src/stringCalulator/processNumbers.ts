const MAX_ALLOWED_NUMBER = 1000
const LINE_SEPARATOR = '\n'
const VALUE_SEPARATOR = ','

const isValidNumber = (val: number): boolean => !isNaN(val)
const isWithinLimit = (num: number): boolean => num <= MAX_ALLOWED_NUMBER

export function processNumbers(str: string): number[] {
    return str
        .replaceAll(LINE_SEPARATOR, VALUE_SEPARATOR)
        .split(VALUE_SEPARATOR)
        .map(Number)
        .filter(isValidNumber)
        .filter(isWithinLimit)
}