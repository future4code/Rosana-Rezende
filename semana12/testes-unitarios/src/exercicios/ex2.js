export function checaPalindromo(frase) {
    let palindromo = false
    let fraseSemTraco = frase.replace(/-/g, " ")
    let fraseSemEspacos = fraseSemTraco.replace(/ /g, "");
    let novaFrase = fraseSemEspacos.split('').reverse().join('')   
    if(fraseSemEspacos.toLowerCase() === novaFrase.toLowerCase()){
        palindromo = true
    }
    return palindromo
}
