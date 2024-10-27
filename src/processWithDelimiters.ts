export function processWithDelimiters(str: string, delimiters: string[]): string {
    let newStr = str.replaceAll('\n', ',').split(',')[1]

    delimiters.forEach((del) => {
        newStr = newStr.replaceAll(del, ',')
    })
    return newStr;
}