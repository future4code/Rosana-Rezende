export function stringReverse(text: string): string{
    return text.split("").reverse().join("")

    // or
    // let newText = ""
    // for(let i = text.length -1; i >= 0; i--){
    //     newText += text[i]
    // }
    // return newText

    // or RECURSIVE
    // if(text === "") return ""
    // else return stringReverse(text.substr(1)) + text.charAt(0)
}