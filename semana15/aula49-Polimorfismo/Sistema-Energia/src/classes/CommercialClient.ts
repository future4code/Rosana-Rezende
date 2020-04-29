import { Commerce } from './Commerce'
import { Client } from '../interfaces/Client'

export class CommercialClient extends Commerce implements Client {

    constructor(
        floorsQuantity: number, cep: string,
        public name: string, public registrationNumber: number, public consumedEnergy: number,
        private cnpj: string
    ) {
        super(floorsQuantity, cep)
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    getCnpj() {
        return this.cnpj
    }

}