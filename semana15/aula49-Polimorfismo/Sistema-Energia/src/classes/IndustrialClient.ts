import { Industry } from './Industry'
import { Client } from '../interfaces/Client'
import { ClientPersistence } from './ClientPersistence'

export class IndustrialClient extends Industry implements Client {

    constructor(
        machinesQuantity: number, cep: string,
        public name: string, public registrationNumber: number, public consumedEnergy: number,
        private industrialRegistrationNumber: number
    ) {
        super(machinesQuantity, cep)

        const existingClient = ClientPersistence.CLIENTS_REGISTRATION_NUMBER.find((number) => {
            return number === registrationNumber
        })

        if (existingClient) {
            throw new Error(`Já existe um usuário com o número ${registrationNumber}`)
        } else {
            ClientPersistence.ADD_REGISTRATION(registrationNumber);
        }
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + 100 * this.machinesQuantity
    }

    getIndustrialRegistrationNumber() {
        return this.industrialRegistrationNumber
    }

}