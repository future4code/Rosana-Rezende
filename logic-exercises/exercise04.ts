export function onlyContainsNumbers(text: string): boolean {
    let otherCharacters = 0
    for(let character of text){
        if (
            character == "0" ||
            character == "1" ||
            character == "2" ||
            character == "3" ||
            character == "4" ||
            character == "5" ||
            character == "6" ||
            character == "7" ||
            character == "8" ||
            character == "9"
        ){
            otherCharacters += 0
        } else{
            otherCharacters += 1
        }
    }
    if(otherCharacters === 0){
        return true
    }
    return false
}