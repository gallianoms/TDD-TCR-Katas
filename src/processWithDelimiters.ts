import {processNumbers} from "./processNumbers";

export function processWithDelimiters(str: string, delimiters: string[]): number[] {
    let newStr = str.replaceAll('\n', ',').split(',')[1]

    delimiters.forEach((del) => {
        newStr = newStr.replaceAll(del, ',')
    })

    return processNumbers(newStr);
}