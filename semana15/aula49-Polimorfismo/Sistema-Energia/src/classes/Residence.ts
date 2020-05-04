import { Place } from '../abstracts/Place'

export class Residence extends Place {
    constructor(protected residentsQuantity: number, cep: string) {
        super(cep);
    }

    getResidentsQuantity(){
        return this.residentsQuantity
    }
    
}