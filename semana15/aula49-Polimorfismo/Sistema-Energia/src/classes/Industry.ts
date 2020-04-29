import { Place } from '../abstracts/Place'

export class Industry extends Place {
    constructor(protected machinesQuantity: number, cep: string) {
        super(cep);
    }

    getMachinesQuantity(){
        return this.machinesQuantity
    }

    
}