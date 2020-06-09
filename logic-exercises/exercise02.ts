// a. Faça uma função que receba uma string e devolva um objeto com as informações: quantos caracteres a string possui, qual seu primeiro caracter e qual seu último caracter

function stringToObject(text: string): object {
    const result = {
        numberOfCharacters: text.length,
        firstCharacter: text[0],
        lastCharacter: text[text.length - 1]
    }
    return result
}

// b. Faça uma função que receba uma string e devolva um array com seus caracteres. Se o input for `escola`, a saída deve ser `[e, s, c, o, l, a]`

function stringToArray(text: string): string[] {
    let result = []
    for(let caracter of text){
        result.push(caracter)
    }
    return result
}
