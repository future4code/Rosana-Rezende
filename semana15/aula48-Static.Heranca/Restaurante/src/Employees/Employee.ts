
export class Employee {
    name: string
    salary: number

    constructor(name: string, salary: number){
        this.name = name
        this.salary = salary
    }

    // não consegui deixar só o nome
    sayJob(): void{
        console.log('O cargo é', this)
    }

}