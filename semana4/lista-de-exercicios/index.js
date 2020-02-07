// --------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*

1)
A função conversorDeMoeda recebe o parâmetro valoeEmDolar.
Essa função pede ao usuário que informe o valor da cotação do dólar, que será convertido para número.
Em seguida, retorna uma string concatenando o cifrão de real com o valor em dolar (parâmetro recebido pela função) multiplicado pela coração informada pelo usuário.

Para que essa função seja chamada há um callback.
A variável meuDinheiro recebeu a função conversorDeMoeda com o parâmetro number 100.

Por fim, impreme-se o valor da variável meuDinheiro no console.
O valor impresso será: R$ com 100 multiplicado pela cotação que o usuário informar
    ex: se cotacao = 10, imprime-se R$1000


2)
A função investeDinheiro recebe 2 parâmetro: tipoDeInvestimento e valor.
Dentro da função, declara-se a variável valorAposInvestimento.
Em seguida usa-se a condicional switch case para determinar o que o parâmetro 
tipoDeInvestimento irá retornar, por exemplo: se o tipoDeInvestimento for "Poupança", 
irá retornar valorAposInvestimento = valor passado como parâmetro multiplicado por 1.03.
E caso o tipoDeInvestimento não seja encontrado um alert informará ao usuário que o 
investimento informado está incorreto.
Ao final, a função retornará o valorAposInvestimento.

Para que essa função seja chamada há um callback.
A variável novoMontante recebeu a função investeDinheiro com os parâmetros: 
a string "Ações" e o number 150.
A variável segundoMontante recebeu a função investeDinheiro com os parâmetros: 
a string "Tesouro Direto" e o number 200.

Imprime-se a variável novoMontante no console. 
Resultado: aparece 165 no console

Imprime-se a variável segundoMontante no console. Resultado:
abre-se um alert com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
aparece undefined no console


3) 
Declara-se três variáveis de arrays: 
- numeros, com array de números dentro
- array1 e array2 vazias.

Em seguida usa-se o laço for... of... na array numeros para analisar se seus números são pares ou ímpares.
Se par, insere na array1, se ímpar, insere na aaray2.

Em seguida imprime-se no console:
- a quantidade de números na array numeros concatenando com uma string: Quantidade total de números 14
- a quantidade de números na array array1: 6
- a quantidade de números na array array2: 8


4)
Declara-se 3 variáveis: 
- numeros, uma array com diversos números dentro, inclusive negativo e float
- numero1, coma propriedade Infinity (acredito que sejam números infinitos)
- numero2 igual a 0

Em seguida usa-se o laço for... of... na array numeros para analisar se cada número nela é maior ou menor que o numero1 e numero2.
Se o numero na array for menor que numero1, o numero1 será substituído pelo numero.
E se o numero na array for maior que o numero2, o numero2 será substituído pelo numero.

Em seguida imprime-se no console:
- como o numero1 é infinito, ele é maior que todos os numeros positivos dentro da array.
Contudo, em relação ao negativos ele será menor, logo será substituído pelo negativo. 
Resultado: -10

- como o numero2 é 0, os numeros positivos dentro da array são maiores que ele e o substituirão 
sequencialmente.
Resultado: 1590

*/

// --------------------- EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

/* 1)
É possível iterar uma lista/array por meio de loops (index ou operador of)
 ou por meio de funções (forEach, map e filter)
*/

// const lista1 = [1, 2, 3, 4, 5]
// let lista2 = []

// for (let numero of lista1) {
//     let novoNumero = numero * 2
//     lista2.push(novoNumero)
// }

// console.log(lista2) // [2, 4, 6, 8, 10]




// --------------------- EXERCÍCIOS DE FUNÇÕES




// --------------------- EXERCÍCIOS DE OBJETOS



// --------------------- EXERCÍCIOS DE FUNÇÕES DE ARRAY



