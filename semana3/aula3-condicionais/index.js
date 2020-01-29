// ------------------ Exercícios de interpretação de código

// EXERCÍCIO 1 

// O código testa se um número é par ou ímpar usando condicional if/else.
// Caso seja par (o resto da divisão por 2 é 0), imprime "Passou no teste.".
// Caso seja ímpar (o resto da divisão por 2 não é 0), imprime "Não passou no teste.".


// EXERCÍCIO 2 

// a. O código serve para indicar o preço da fruta informada pelo usuário.

// b. O preço da fruta  Maçã  é  R$  2.25

// c. 24,55

// d. O preço da fruta  Pêra  é  R$  5


// EXERCÍCIO 3 

// A mensagem no terminal será "Uncaught ReferenceError: mensagem is not defined".
// Isso acontece pq a variável mensagem foi definida dentro do bloco do if (um filho) e não no escopo global (que é o pai de todos os blocos/escopos), sendo assim o escopo global não consegue acessá-la.


// ------------------ Exercícios de escrita de código

// EXERCÍCIO 4 

// a)

/*
n1 = Number(prompt("Digite um número"))
n2 = Number(prompt("Digite mais um número"))

if (n1 < n2){
    console.log(n2, n1)
} else {
    console.log(n1, n2)
}
*/

// Quando os números são iguais ele imprime os dois e a ordem não importa

// b)

// n1 = Number(prompt("Digite um número"))
// n2 = Number(prompt("Digite um segundo número"))
// n3 = Number(prompt("Digite um terceiro número"))

/*
let n1menor = (n1 < n2) && (n1 < n3)
let n2menor = (n2 < n1) && (n2 < n3)
let n3menor = (n3 < n2) && (n3 < n1)

if (n1menor) {
    let n2meio = n2 < n3
    if (n2meio) {
        console.log(n3, n2, n1)
    } else {
        console.log (n2, n3, n1)
    }
} else if (n2menor) {
    let n1meio = n1 < n3
    if (n1meio) {
        console.log(n3, n1, n2)
    } else {
        console.log(n1, n3, n2)
    }
} else if (n3menor) {
    let n1meio = n1 < n2
    if (n1meio) {
        console.log(n2, n1, n3)
    } else {
        console.log(n1, n2, n3)
    }
}
*/

// Quando digito 3 números iguais não aparece nada

// c) 

/*
n1 = Number(prompt("Digite um número"))
n2 = Number(prompt("Digite um segundo número"))
n3 = Number(prompt("Digite um terceiro número"))

let n1menor = (n1 < n2) && (n1 < n3)
let n2menor = (n2 < n1) && (n2 < n3)
let n3menor = (n3 < n2) && (n3 < n1)

if (n1menor) {
    let n2meio = n2 < n3
    if (n2meio) {
        console.log(n3, n2, n1)
    } else {
        console.log (n2, n3, n1)
    }
} else if (n2menor) {
    let n1meio = n1 < n3
    if (n1meio) {
        console.log(n3, n1, n2)
    } else {
        console.log(n1, n3, n2)
    }
} else if (n3menor) {
    let n1meio = n1 < n2
    if (n1meio) {
        console.log(n2, n1, n3)
    } else {
        console.log(n1, n2, n3)
    }
} else {
    console.log("Digite números diferentes, por favor! ;)")
}
*/


// EXERCÍCIO 5 

// a) https://1drv.ms/u/s!Ak6L3aTlMwHEtI18edcesNECSS0z_A?e=M6rPL9


// b)
/*
const possuiOssos = prompt("Possui ossos? [s/n]")
if (possuiOssos === "n") {
    console.log("invertebrado")
} else {
    const possuiPelos = prompt("Possui pelos? [s/n]")
    if (possuiPelos === "s") {
        const racional = prompt("É racional? [s/n]")
        if (racional === "s") {
            console.log("ser humano")
        } else {
            console.log("mamífero não humano")
        } 
    } 
    else {
        const possuiPenas = prompt("Possui penas? [s/n]")
        if (possuiPenas === "s") {
            console.log("ave")
        } else {
            const terrestre = prompt("É animal terrestre? [s/n]")
            if (terrestre === "n") {
                console.log("peixe")
            } else {
                const arrasta = prompt("Se arrasta na terra? [s/n]")
                if (arrasta === "s") {
                    console.log("réptil")
                } else {
                    console.log("anfíbio")
                }
            }
        }
    }
}
*/

// ------------------ Desafio

const nomeCompleto = prompt("Digite seu nome completo:")

let tipoDeJogo = prompt("Qual o tipo de jogo: doméstico (DO) ou internacional (IN)? [DO/IN]").toUpperCase()
if (tipoDeJogo === "DO") {
    tipoDeJogo = "Doméstico"
} else if (tipoDeJogo === "IN") {
    tipoDeJogo = "Internacional"
}

let etapaDoJogo = prompt("Qual a etapa do jogo: semi-final (SF), decisão de terceiro lugar (DT) ou final (FI)? [SF/DT/FI]").toUpperCase()
if (etapaDoJogo === "SF") {
    etapaDoJogo = "Semi-final"
} else if (etapaDoJogo === "DT") {
    etapaDoJogo = "Decisão de terceiro lugar"
} else if (etapaDoJogo === "FI") {
    etapaDoJogo = "Final"
}

const categoria = Number(prompt("Qual a categoria? [1, 2, 3 ou 4]"))

const qtdIngressos = Number(prompt("Quantidade de ingresos:"))

let valorDoIngresso

if (etapaDoJogo === "Semi-final") {
    if (categoria === 1) {
        valorDoIngresso = 1320
    } else if (categoria === 2) {
        valorDoIngresso = 880
    } else if (categoria === 3) {
        valorDoIngresso = 550
    }
    else if (categoria === 4) {
        valorDoIngresso = 220
    }
} else if (etapaDoJogo === "Decisão de terceiro lugar") {
    if (categoria === 1) {
        valorDoIngresso = 660
    } else if (categoria === 2) {
        valorDoIngresso = 440
    } else if (categoria === 3) {
        valorDoIngresso = 330
    }
    else if (categoria === 4) {
        valorDoIngresso = 170
    }
} else if (etapaDoJogo === "Final") {
    if (categoria === 1) {
        valorDoIngresso = 1980
    } else if (categoria === 2) {
        valorDoIngresso = 1320
    } else if (categoria === 3) {
        valorDoIngresso = 880
    }
    else if (categoria === 4) {
        valorDoIngresso = 330
    }
}


if (tipoDeJogo === "Doméstico") {
    console.log(
        "---Dados da compra---\nNome do cliente: " + nomeCompleto +
        "\nTipo do jogo: " + tipoDeJogo +
        "\nEtapa do jogo: " + etapaDoJogo +
        "\nCategoria: " + categoria +
        "\nQuantidade de Ingressos: " + qtdIngressos + " ingressos" +
        "\n---Valores---" +
        "\nValor do ingresso: R$ " + valorDoIngresso +
        "\nValor total: R$" + (valorDoIngresso * qtdIngressos)
    )
} else if (tipoDeJogo === "Internacional") {
    console.log(
        "---Dados da compra---\nNome do cliente: " + nomeCompleto +
        "\nTipo do jogo: " + tipoDeJogo +
        "\nEtapa do jogo: " + etapaDoJogo +
        "\nCategoria: " + categoria +
        "\nQuantidade de Ingressos: " + qtdIngressos + " ingressos" +
        "\n---Valores---" +
        "\nValor do ingresso: U$ " + (valorDoIngresso / 4.1) +
        "\nValor total: U$ " + ((valorDoIngresso / 4.1) * qtdIngressos)
    )
}
