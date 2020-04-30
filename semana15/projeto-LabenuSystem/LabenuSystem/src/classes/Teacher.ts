import { Person } from "../interfaces/Person";
import { PersonPersistence } from "./restrictions/PersonPersistence";
import { Specialities } from "./restrictions/Specialities";


export class Teacher implements Person {
    constructor(
        public id: number, public name: string, public email: string,
        public specialties: string[] 
    ) {

        // garantindo que o id (de alunos e professores) seja único
        const existingPerson = PersonPersistence.ID_NUMBERS.find(id_number => id_number === id)
        if (existingPerson) {
            throw new Error(`Já existe uma pessoa com o id ${id}`)
        } else {
            PersonPersistence.ADD_ID(id)
        }

        /// ver se o array de especialidades está contido no array que contem todas as especialidades
        let finalList = []
        for(let item of specialties){
            for (let elem of Specialities.SPECIALITIES_LIST) {
                if (item === elem){
                    finalList.push(true)
                }
            }
        }
        if (finalList.length !== specialties.length){
            throw new Error(`Uma das especialidades informadas é inválida!`)
        } else {
            this.specialties = specialties
        }
        
    }

}