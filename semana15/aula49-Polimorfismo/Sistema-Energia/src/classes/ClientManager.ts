import { Client } from '../interfaces/Client'

export class ClientManager {

    constructor(private clients: Client[] = []){
    }

    getClientsQuantity(): number{
        return this.clients.length
    }

    registerClient(client: Client): void {
        this.clients.push(client)
    }

    calculateBillOfClient(registrationNumber: number): number {
        const foundClient = this.clients.find(client => client.registrationNumber === registrationNumber)
        if(foundClient){
            return foundClient.calculateBill()
        }
        return 0
    }

    calculateTotalIncome(): number{
        const total = this.clients.reduce((prevVal, client) => {
            return prevVal + client.calculateBill()
        }, 0)
        return total
    }

    deleteUser(registrationNumber: number){
        return this.clients = this.clients.filter(client => client.registrationNumber !== registrationNumber)
    }

    printClients(): void {
        this.clients.map(client => (
            console.log(client.name + " - " + client.registrationNumber + " - " + client.consumedEnergy + " - " + client.calculateBill())
        ))
    }

}