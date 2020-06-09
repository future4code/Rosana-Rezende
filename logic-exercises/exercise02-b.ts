// 2 - b. Faça uma função que receba uma string e devolva um array com seus caracteres. Se o input for `escola`, a saída deve ser `[e, s, c, o, l, a]`

export function stringToArray(text: string): string[] {
    let result = []
    for(let caracter of text){
        result.push(caracter)
    }
    return result
}