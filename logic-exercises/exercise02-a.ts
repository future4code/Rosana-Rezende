// 2 - a. Faça uma função que receba uma string e devolva um objeto com as informações: quantos caracteres a string possui, qual seu primeiro caracter e qual seu último caracter

export function stringToObject(text: string): object {
    const result = {
        numberOfCharacters: text.length,
        firstCharacter: text[0],
        lastCharacter: text[text.length - 1]
    }
    return result
}
