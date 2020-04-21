"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio9_1 = require("./exercicio9");
function contaDuplicadas(texto) {
    let count = 0;
    let texto2 = texto.toLocaleLowerCase().split("").sort();
    for (let index = 0; index < texto.length; index++) {
        for (let chave = index + 1; chave < texto2.length; chave++) {
            if (texto[index] == texto2[chave]) {
                count++;
            }
        }
    }
    return count;
}
function calculaQuantidadeDeAnagramas(texto) {
    let quantidadeDeAnagramas;
    let temLetrasRepetidas = (/([a-zA-Z]).*?\1/).test(texto);
    let quantidadeDeLetras = texto.length;
    let quantidadeDeLetrasRepetidas = contaDuplicadas(texto);
    if (!temLetrasRepetidas) {
        quantidadeDeAnagramas = exercicio9_1.calculaFatorial(quantidadeDeLetras);
    }
    else {
        quantidadeDeAnagramas = exercicio9_1.calculaFatorial(quantidadeDeLetras) / exercicio9_1.calculaFatorial(quantidadeDeLetrasRepetidas);
    }
    return quantidadeDeAnagramas;
}
console.log(calculaQuantidadeDeAnagramas('Anagrama'));
//# sourceMappingURL=exercicio10.js.map