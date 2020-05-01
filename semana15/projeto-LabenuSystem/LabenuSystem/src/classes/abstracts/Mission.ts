import { Teacher } from "../Teacher";
import { Student } from "../Student";
import { MissionPersistence } from "../restrictions/MissionPersistence";
import { ModuleNumber } from "../restrictions/ModuleNumber";

export abstract class Mission {

    constructor(
        private id: number,
        public name: string,
        private startDate: string,
        private endDate: string,
        private teachersList: Teacher[] = [],
        private studentsList: Student[] = [],
        private currentModule?: number // ele pode ser undefined
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

     registerTeacher(teacher: Teacher): void {
         this.teachersList.push(teacher)
     }

     registerStudent(student: Student): void {
         this.studentsList.push(student)
     }

     getId(): number {
         return this.id
     }

     getName(){
         return this.name
     }

     setName(name: string){
        this.name = name
     }

     getStartDate(){
         return this.startDate
     }

     getEndDate(){
         return this.endDate
     }

     getTeachersList(){
         return this.teachersList
     }

     getStudentsList(){
         return this.studentsList
     }

     getCurrentModule(){
         return this.currentModule
     }
    
}