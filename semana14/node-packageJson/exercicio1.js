const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let resultado
if(operacao === 'add'){
    resultado = num1 + num2
} 
else if(operacao === 'sub'){
    resultado = num1 - num2
} 
else if(operacao === 'mult'){
    resultado = num1 * num2
} 
else if(operacao === 'div') {
    resultado = num1 / num2
}
else {
    resultado = 'Erro! Realize uma operação matemática válida.'
}

console.log('Resposta: ', resultado)