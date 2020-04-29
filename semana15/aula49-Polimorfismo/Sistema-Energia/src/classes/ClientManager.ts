import { Client } from '../interfaces/Client'

export class ClientManager {

    constructor(private clients: Client[] = []){
    }

    getClientsQuantity(): number{
        return this.clients.length
    }

}