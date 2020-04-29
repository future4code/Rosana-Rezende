import { Industry } from './Industry'
import { Client } from '../interfaces/Client'

export class IndustrialClient extends Industry implements Client {

    constructor(
        machinesQuantity: number, cep: string,
        public name: string, public registrationNumber: number, public consumedEnergy: number,
        private industrialRegistrationNumber: number
    ) {
        super(machinesQuantity, cep)
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + 100 * this.machinesQuantity
    }

    getIndustrialRegistrationNumber() {
        return this.industrialRegistrationNumber
    }

}