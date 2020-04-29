import { Place } from '../abstracts/Place'

export class Commerce extends Place {
    constructor(protected floorsQuantity: number, cep: string) {
        super(cep);
    }

    getFloorsQuantity(){
        return this.floorsQuantity
    }

    
}