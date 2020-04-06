export function anoBissexto(ano) {
    let bissexto = false
    if (ano % 4 === 0) {
        if (ano % 100 === 0 && ano % 400 !== 0) {
            return bissexto = false
        }
        return bissexto = true
    }
    return bissexto
}
