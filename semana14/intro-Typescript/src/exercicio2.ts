function infoNumeros(numeros: number[]): {
    quantidadeTotal: number,
    quantidadeImpares: number,
    soma: number
} {
    let resultado: {
        quantidadeTotal: number,
        quantidadeImpares: number,
        soma: number
    }
    resultado = {
        quantidadeTotal: numeros.length,
        quantidadeImpares: numeros.filter(numero => numero % 2 !== 0).length,
        soma: numeros.reduce((prevVal, numero) => prevVal + numero, 0)
    }
    return resultado
}

const info = infoNumeros([2, 5, 10, 3, 1])

console.log(info)