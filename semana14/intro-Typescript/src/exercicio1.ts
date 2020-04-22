function operacoesMatematicas(num1: number, num2: number): void {
    let resultado: {
        soma: number,
        subtracao: number,
        multiplicação: number,
        maior: number 
    }
    resultado = {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicação: num1 * num2,
        maior: num1 > num2 ? num1 : num2
    }
    console.log(`
    Dados os números ${num1} e ${num2}:
        - a soma desses números é ${resultado.soma}, 
        - a subtração desses números é ${resultado.subtracao}, 
        - a multiplicação desses números é ${resultado.multiplicação} 
        - o maior número é ${resultado.maior}`)
}

const operacao = operacoesMatematicas(7, 12)

console.log(operacao)