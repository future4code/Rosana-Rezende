import { Person } from "../interfaces/Person";
import { PersonPersistence } from "./restrictions/PersonPersistence";
// import * as moment from "moment"

export class Student implements Person {
    age: number

    constructor(
        public id: number, public name: string, public email: string,
        public birthDate: string, public hobbies: string[]
    ) {
        // garantindo que o id (de alunos e professores) seja único
        const existingPerson = PersonPersistence.ID_NUMBERS.find(id_number => id_number === id)
        if (existingPerson) {
            throw new Error(`Já existe uma pessoa com o id ${id}`)
        } else {
            PersonPersistence.ADD_ID(id)
        }
        
    }

    // getAge(): number{
    //     const today: moment.Moment = moment()
    //     const informedDateOfBith: moment.Moment = moment(this.birthDate, "DD/MM/YYYY")
    //     return this.age = today.diff(informedDateOfBith, "years")
    // }

}