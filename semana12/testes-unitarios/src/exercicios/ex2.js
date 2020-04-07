export function checaPalindromo(frase) {
    let palindromo = false
    let fraseSemTraco = frase.replace(/-/g, " ")
    let fraseSemAcentos = fraseSemTraco.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    let fraseSemEspacos = fraseSemAcentos.replace(/ /g, "");
    let novaFrase = fraseSemEspacos.split('').reverse().join('')   
    if(fraseSemEspacos.toLowerCase() === novaFrase.toLowerCase()){
        palindromo = true
    }
    return palindromo
}
