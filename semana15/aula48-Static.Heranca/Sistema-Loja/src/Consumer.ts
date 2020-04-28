import { User } from './User'

export class Consumer extends User {
    public purchaseTotal: number = 0; // não precisa ir pro construtor, já demos um valor aqui
    private creditCard: string;

    constructor(id: string, email: string, name: string, password: string, creditCard: string){
        super(id, email, name, password)
        console.log("Chamando o construtor da classe Customer")
        this.creditCard = creditCard
    }

    public getCreditCard(): string {
        return this.creditCard
    }

}