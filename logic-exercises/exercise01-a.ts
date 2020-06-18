export function getInformationAboutArrayOfNumber(array: number[]): object{
    return {
        sum: array.reduce((prevVal, elem) => prevVal + elem, 0),
        quantity: array.length,
        multiplication: array.reduce((prevVal, elem) => prevVal * elem, 1)
    }
}