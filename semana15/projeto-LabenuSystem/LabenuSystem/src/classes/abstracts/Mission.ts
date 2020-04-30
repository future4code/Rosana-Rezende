import { Teacher } from "../Teacher";
import { Student } from "../Student";
import { MissionPersistence } from "../restrictions/MissionPersistence";
import { ModuleNumber } from "../restrictions/ModuleNumber";

export abstract class Mission {

    constructor(
        public id: number,
        public name: string,
        public startDate: string,
        public endDate: string,
        public teachersList: Teacher[],
        public studentsList: Student[],
        public currentModule?: number // ele pode ser undefined
    ){
        // garantindo que o id da turma seja único
        const existingPerson = MissionPersistence.ID_NUMBERS.find(id_number => id_number === id)
        if (existingPerson) {
            throw new Error(`Já existe uma turma com o id ${id}`)
        } else {
            MissionPersistence.ADD_ID(id)
        }

        // se o módulo não for undefined
        if(currentModule){
            // garantir que o Módulo seja de 1 a 7
            let findModule = ModuleNumber.MODULE_NUMBER_LIST.find(number => number === currentModule)
            if(findModule){
                this.currentModule = currentModule
            } else {
                throw new Error(`Escolha um número entre 1 e 7`)
            }        
        }

     }
    
}