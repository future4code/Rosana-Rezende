let textoReverso: string

function reverteTexto(texto: string): string {
    textoReverso = texto.split('').reverse().join('')
    return textoReverso
}

reverteTexto('abcd')
console.log(textoReverso)