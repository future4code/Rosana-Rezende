import { Residence } from './Residence'
import { Client } from '../interfaces/Client'

export class ResidentialClient extends Residence implements Client {

    constructor(
        residentsQuantity: number, cep: string,
        public name: string, public registrationNumber: number, public consumedEnergy: number,
        private cpf: string
    ) {
        super(residentsQuantity, cep)
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.75
    }

    getCpf() {
        return this.cpf
    }

}