
export class Transaction{
    value: number;
    description: string;
    date: string

    constructor(value: number, description: string, date: string){
        this.value = value;
        this.description = description;
        this.date = date
    }

}