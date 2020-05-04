import { Residence } from './Residence'
import { Client } from '../interfaces/Client'
import { ClientPersistence } from './ClientPersistence'

export class ResidentialClient extends Residence implements Client {

    constructor(
        residentsQuantity: number, cep: string,
        public name: string, public registrationNumber: number, public consumedEnergy: number,
        private cpf: string
    ) {
        super(residentsQuantity, cep)

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
        return this.consumedEnergy * 0.75
    }

    getCpf() {
        return this.cpf
    }

}