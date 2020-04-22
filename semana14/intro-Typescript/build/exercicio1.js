function operacoesMatematicas(num1, num2) {
    let resultado;
    resultado = {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicação: num1 * num2,
        maior: num1 > num2 ? num1 : num2
    };
    console.log(`
    Dados os números ${num1} e ${num2}:
        - a soma desses números é ${resultado.soma}, 
        - a subtração desses números é ${resultado.subtracao}, 
        - a multiplicação desses números é ${resultado.multiplicação} 
        - o maior número é ${resultado.maior}`);
}
const operacao = operacoesMatematicas(7, 12);
console.log(operacao);
//# sourceMappingURL=exercicio1.js.map