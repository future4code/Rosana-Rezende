import { calculaFatorial } from './exercicio9'

function contaDuplicadas(texto: string) {
    let count: number = 0
    let texto2: string[] = texto.toLocaleLowerCase().split("").sort()
    for (let index = 0; index < texto.length; index++) {
        for (let chave = index + 1; chave < texto2.length; chave++) {
            if (texto[index] == texto2[chave]) {
                count++
            }
        }
    }
    return count
}

function calculaQuantidadeDeAnagramas(texto: string): number {
    let quantidadeDeAnagramas: number
    
    let temLetrasRepetidas: boolean = (/([a-zA-Z]).*?\1/).test(texto)
    
    let quantidadeDeLetras: number = texto.length
    
    let quantidadeDeLetrasRepetidas: number = contaDuplicadas(texto)

    if (!temLetrasRepetidas) {
        quantidadeDeAnagramas = calculaFatorial(quantidadeDeLetras)
    } else {
        quantidadeDeAnagramas = calculaFatorial(quantidadeDeLetras) / calculaFatorial(quantidadeDeLetrasRepetidas)
    }

    return quantidadeDeAnagramas
}

console.log(calculaQuantidadeDeAnagramas('Anagrama'))
