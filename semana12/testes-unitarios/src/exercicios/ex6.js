export function primeirasLetrasParaMaiusculas(frase) {
    let palavras = frase.split(' ')
    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];
        palavras[i] = palavra[0].toUpperCase() + palavra.slice(1);
    }
    return palavras.join(' ')
}
