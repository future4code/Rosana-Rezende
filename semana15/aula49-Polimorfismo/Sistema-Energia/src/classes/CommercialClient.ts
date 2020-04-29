import { Commerce } from './Commerce'
import { Client } from '../interfaces/Client'
import { ClientPersistence } from './ClientPersistence'

export class CommercialClient extends Commerce implements Client {

    constructor(
        floorsQuantity: number, cep: string,
        public name: string, public registrationNumber: number, public consumedEnergy: number,
        private cnpj: string
    ) {
        super(floorsQuantity, cep)

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
        return this.consumedEnergy * 0.53
    }

    getCnpj() {
        return this.cnpj
    }

}