export const fillArray = (arr: number[], num: number): number[] => {
    const findNum = arr.find(number => number === num)
    if(findNum){
        return arr
    }
    let result = arr
    const lowestNum = arr[0]
    if(num < lowestNum){
        while(num < result[0]){
            result.unshift(result[0] - 1)
        }
    } 
    while(num > result[result.length -1]){
        result.push(result[result.length -1] + 1)
    }
    return result
}