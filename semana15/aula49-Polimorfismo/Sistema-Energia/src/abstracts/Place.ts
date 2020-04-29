// Place é uma CLASSE porque precisa ter um acesso restrito a 
// um dos seus atributos, o que é impossível de se fazer em interfaces.

// Place é ABSTRATA porque não enxergamos uma situação em que seria 
// necessário criar uma instância dessa classe.


export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}