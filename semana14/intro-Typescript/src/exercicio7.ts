let rna: string

function transformaDNAemRNA(dna: string): string {
    rna = dna.toUpperCase() // previnindo caso alguém digite letras minúsculas
    let trocas: any = { // com object estava dando erro
        C: 'g',
        G: 'c',
        A: 'u',
        T: 'a'
    }
    rna = rna.replace(/[CGAT]/g, i => trocas[i])
    rna = rna.toUpperCase()
    return rna
}

transformaDNAemRNA("ATTGCTGCGCATTAACGACGCGTA")
console.log(rna)
