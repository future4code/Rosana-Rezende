import { calculaFatorial } from './exercicio9'

let count: number = 0
function contaDuplicadas(text: string) {
    let text2: string[] = text.toLocaleLowerCase().split("").sort()
    for (let index = 0; index < text.length; index++) {
        for (let chave = index + 1; chave < text2.length; chave++) {
            if (text[index] == text2[chave]) {
                count++
            }
        }
    }
    return count
}

let quantidadeDeAnagramas: number
let temLetrasRepetidas: boolean
let quantidadeDeLetras: number
let quantidadeDeLetrasRepetidas: number

function calculaQuantidadeDeAnagramas(texto: string): number {
    temLetrasRepetidas = (/([a-zA-Z]).*?\1/).test(texto)    
    quantidadeDeLetras = texto.length
    quantidadeDeLetrasRepetidas = contaDuplicadas(texto)

    if(!temLetrasRepetidas){
        quantidadeDeAnagramas = calculaFatorial(quantidadeDeLetras)
    } else{
        quantidadeDeAnagramas = calculaFatorial(quantidadeDeLetras) / calculaFatorial(quantidadeDeLetrasRepetidas)
    }
    
    return quantidadeDeAnagramas
}

calculaQuantidadeDeAnagramas('Anagrama')
console.log(temLetrasRepetidas)
console.log(calculaFatorial(quantidadeDeLetras))
console.log(calculaFatorial(quantidadeDeLetrasRepetidas))
console.log(quantidadeDeAnagramas)

// o cálculo de fatorial está dando erro