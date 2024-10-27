const DELIMITER_REGEX = /\[([^\]]*)]/g
const OPENING_BRACKET_LENGTH = 1
const CLOSING_BRACKET_LENGTH = 1

export const extractDelimiters = (str: string): string[] => {
    return str.match(DELIMITER_REGEX)?.map((match) => match.slice(OPENING_BRACKET_LENGTH, CLOSING_BRACKET_LENGTH)) ?? []
}