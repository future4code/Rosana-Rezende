let rna;
function transformaDNAemRNA(dna) {
    rna = dna.toUpperCase();
    let trocas = {
        C: 'g',
        G: 'c',
        A: 'u',
        T: 'a'
    };
    rna = rna.replace(/[CGAT]/g, i => trocas[i]);
    rna = rna.toUpperCase();
    return rna;
}
transformaDNAemRNA("ATTGCTGCGCATTAACGACGCGTA");
console.log(rna);
//# sourceMappingURL=exercicio7.js.map