import { NightMission } from "./classes/NightMission";
import { FullTimetMission } from "./classes/FullTimeMission";
import { Teacher } from "./classes/Teacher";
import { Student } from "./classes/Student";
import { FileManager } from './classes/fileManager/FileManager'
import { Mission } from "./classes/abstracts/Mission";

export const operation: string = process.argv[4]

enum Operation {
    ADD_MISSION = 'addMission',
    ADD_STUDENT = 'addStudent',
    ADD_TEACHER = 'addTeacher'
}

// CRIAR  2 ALUNOS
const alunaRosana = new Student(1, "Rosana", "rosana@email.com", "11/03/1987", ["Maranotar Netflix", "Codar"])
// console.log(alunaRosana)

const alunoJonas = new Student(2, "Jonas", "jonas@email.com", "20/01/1995", ["Jogar bola"])
// console.log(alunoJonas)


// CRIAR 4 PROFESSORES

const profBananinha = new Teacher(3, "Prof Bananinha", "bananinha@email.com", ["React"])
// console.log(profBananinha)

const profLaranjinha = new Teacher(4, "Prof Laranjinha", "laranjinha@email.com", ["CSS", "Testes"])
// console.log(profLaranjinha)

const profAmorzinho = new Teacher(5, "Prof Amorzinho", "amorzinho@email.com", ['React', 'Redux'])
// console.log(profAmorzinho)

const profZangado = new Teacher(6, "Prof Zangado", "zangado@email.com", ['Typescript', 'Programação Orientada a Objetos', 'Backend'])
// console.log(profZangado)

// CRIAR 2 TURMAS
const turmaSaganNoturna = new NightMission(1, "Sagan-na-night", "30/04/2020", "12/12/2020", [], [], 1)
turmaSaganNoturna.registerTeacher(profBananinha)
turmaSaganNoturna.registerTeacher(profLaranjinha)
turmaSaganNoturna.registerStudent(alunaRosana)
// console.log(turmaSaganNoturna)

const turmaSagan = new FullTimetMission(2, "Sagan", "01/01/2020", "06/06/2020", [], [], 5)
turmaSagan.registerTeacher(profBananinha)
turmaSagan.registerTeacher(profLaranjinha)
turmaSagan.registerTeacher(profAmorzinho)
turmaSagan.registerTeacher(profZangado)
turmaSagan.registerStudent(alunaRosana)
turmaSagan.registerStudent(alunoJonas)
// console.log(turmaSagan)


// MEXENDO COM ARQUIVOS JSON

switch(operation){

    case Operation.ADD_MISSION: {
        const misisonsFile = require('path').resolve(__dirname, '../missions.json')
        const missions = new FileManager(misisonsFile);
        const missionsJson = missions.readFile() as Mission[]
        missionsJson.push(turmaSagan)
        missionsJson.push(turmaSaganNoturna)
        missions.writeFile(missionsJson);
        break
    }

    case Operation.ADD_STUDENT: {
        const studentsFile = require('path').resolve(__dirname, '../students.json')
        const students = new FileManager(studentsFile)
        const studentsJson = students.readFile() as Student[]
        studentsJson.push(alunaRosana)
        studentsJson.push(alunoJonas)
        students.writeFile(studentsJson)
        break
    }

    case Operation.ADD_TEACHER: {
        const teachersFile = require('path').resolve(__dirname, '../teachers.json')
        const teachers = new FileManager(teachersFile)
        const teachersJson = teachers.readFile() as Teacher[]
        teachersJson.push(profBananinha)
        teachersJson.push(profLaranjinha)
        teachersJson.push(profAmorzinho)
        teachersJson.push(profZangado)
        teachers.writeFile(teachersJson)
        break
    }

}

