let resultadoFinal = 1;
function calculaFatorial(n) {
    if (n >= 1) {
        for (let contador = n; contador > 1; contador--) {
            resultadoFinal *= contador;
        }
    }
    else if (n = 0) {
        resultadoFinal = 1;
    }
    return resultadoFinal;
}
calculaFatorial(6);
console.log(resultadoFinal);
//# sourceMappingURL=exercicio9.js.map