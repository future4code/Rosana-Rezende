export function getInformationAboutArrayOfNumber2(array: number[]): object{
    const order = array.sort((a, b) => a - b)
    return {
        highest: order[array.length - 1],
        lowest: order[0]
    }
}