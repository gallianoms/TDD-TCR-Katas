export const validateNegatives = (numbers: number[]): void => {
    const negatives = numbers.filter((num) => num < 0)

    if (negatives.length > 0)
        throw new Error('no allowed negative numbers: ' + negatives)
};