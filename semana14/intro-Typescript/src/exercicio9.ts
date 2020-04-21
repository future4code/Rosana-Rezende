let resultadoFinal: number = 1

export function calculaFatorial(n: number): number {
    if(n >= 1){
        for(let contador = n; contador > 1; contador--){
            resultadoFinal *= contador
        }
    } else if(n = 0){
        resultadoFinal = 1
    }
    return resultadoFinal
}

// calculaFatorial(6)
// console.log(resultadoFinal)