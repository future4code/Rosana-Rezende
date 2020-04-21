"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio9_1 = require("./exercicio9");
let count = 0;
function contaDuplicadas(text) {
    let text2 = text.toLocaleLowerCase().split("").sort();
    for (let index = 0; index < text.length; index++) {
        for (let chave = index + 1; chave < text2.length; chave++) {
            if (text[index] == text2[chave]) {
                count++;
            }
        }
    }
    return count;
}
let quantidadeDeAnagramas;
let temLetrasRepetidas;
let quantidadeDeLetras;
let quantidadeDeLetrasRepetidas;
function calculaQuantidadeDeAnagramas(texto) {
    temLetrasRepetidas = (/([a-zA-Z]).*?\1/).test(texto);
    quantidadeDeLetras = texto.length;
    quantidadeDeLetrasRepetidas = contaDuplicadas(texto);
    if (!temLetrasRepetidas) {
        quantidadeDeAnagramas = exercicio9_1.calculaFatorial(quantidadeDeLetras);
    }
    else {
        quantidadeDeAnagramas = exercicio9_1.calculaFatorial(quantidadeDeLetras) / exercicio9_1.calculaFatorial(quantidadeDeLetrasRepetidas);
    }
    return quantidadeDeAnagramas;
}
calculaQuantidadeDeAnagramas('Anagrama');
console.log(temLetrasRepetidas);
console.log(exercicio9_1.calculaFatorial(quantidadeDeLetras));
console.log(exercicio9_1.calculaFatorial(quantidadeDeLetrasRepetidas));
console.log(quantidadeDeAnagramas);
//# sourceMappingURL=exercicio10.js.map