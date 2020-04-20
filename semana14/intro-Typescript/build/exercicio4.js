function idadeHistorica(ano, siglaACDC) {
    let resultado;
    let seculo;
    if (!siglaACDC) {
        siglaACDC = 'DC';
    }
    if (siglaACDC === 'AC') {
        seculo = 'a.C.';
    }
    else {
        seculo = 'd.C.';
    }
    if (ano >= 0 && ano < 101) {
        resultado = 'I';
    }
    else if (ano >= 101 && ano < 201) {
        resultado = 'II';
    }
    else if (ano >= 201 && ano < 301) {
        resultado = 'III';
    }
    else if (ano >= 301 && ano < 401) {
        resultado = 'IV';
    }
    else if (ano >= 401 && ano < 501) {
        resultado = 'V';
    }
    else if (ano >= 501 && ano < 601) {
        resultado = 'VI';
    }
    else if (ano >= 601 && ano < 701) {
        resultado = 'VII';
    }
    else if (ano >= 701 && ano < 801) {
        resultado = 'VIII';
    }
    else if (ano >= 801 && ano < 901) {
        resultado = 'IX';
    }
    else if (ano >= 901 && ano < 1001) {
        resultado = 'X';
    }
    else if (ano >= 1001 && ano < 1101) {
        resultado = 'XI';
    }
    else if (ano >= 1101 && ano < 1201) {
        resultado = 'XII';
    }
    else if (ano >= 1201 && ano < 1301) {
        resultado = 'XIII';
    }
    else if (ano >= 1301 && ano < 1401) {
        resultado = 'XVI';
    }
    else if (ano >= 1401 && ano < 1501) {
        resultado = 'XV';
    }
    else if (ano >= 1501 && ano < 1601) {
        resultado = 'XVI';
    }
    else if (ano >= 1601 && ano < 1701) {
        resultado = 'XVII';
    }
    else if (ano >= 1701 && ano < 1801) {
        resultado = 'XVIII';
    }
    else if (ano >= 1801 && ano < 1901) {
        resultado = 'XIX';
    }
    else if (ano >= 1901 && ano < 2001) {
        resultado = 'XX';
    }
    else if (ano >= 2001 && ano < 2101) {
        resultado = 'XXI';
    }
    if (typeof ano !== 'number' || typeof siglaACDC !== 'string') {
        console.log('Parâmetro incorreto');
    }
    else if (ano >= 2101) {
        console.log('Informe um ano entre 0 e 2101');
    }
    else {
        console.log(`O ano ${ano} corresponde ao século ${resultado} ${seculo}`);
    }
}
idadeHistorica(1987);
//# sourceMappingURL=exercicio4.js.map