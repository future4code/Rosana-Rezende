
export function calculaFatorial(n: number): number {
    let resultadoFinal: number = 1
    if(n >= 1){
        for(let contador = n; contador > 1; contador--){
            resultadoFinal *= contador
        }
    } else if(n = 0){
        resultadoFinal = 1
    }
    return resultadoFinal
}

// console.log(calculaFatorial(5))

// console.log(calculaFatorial(6))