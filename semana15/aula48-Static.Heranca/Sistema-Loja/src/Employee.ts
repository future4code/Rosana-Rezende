import { User } from './User'

export class Employee extends User {
    protected baseSalary: number;
    protected admissionDate: string;

    constructor(id: string, email: string, name: string, password: string, baseSalary: number, admissionDate: string){
        super(id, email, name, password)
        this.baseSalary = baseSalary
        this.admissionDate = admissionDate
    }

    getAdmissionDate(){
        return this.admissionDate
    }

    getBaseSalary(){
        return this.baseSalary
    }

    calculateTotalSalary(): number{
        const benefits = 400
        return this.baseSalary + benefits
    }



}