import { NightMission } from "./classes/NightMission";
import { FullTimetMission } from "./classes/FullTimeMission";
import { Teacher } from "./classes/Teacher";
import { Student } from "./classes/Student";
import { FileManager } from './classes/fileManager/FileManager'
import { Mission } from "./classes/abstracts/Mission";
import * as moment from "moment"

// ------------------------------ CRIANDO NA MÃO

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



// ---------------------------- CRIANDO COM TERMINAL
const operation: string = process.argv[4]
const id: string = process.argv[5]
const name: string = process.argv[6]

// MISSÕES
const startDate: string = process.argv[7]
const endDate: string = process.argv[8]
const currentModule: string = process.argv[9]

// ALUNOS
const email: string = process.argv[7]
const birthDate: string = process.argv[8]
const hobby1: string = process.argv[9]
const hobby2: string = process.argv[10]
const hobby3: string = process.argv[11]

// PROFESSORES
const speciality1: string = process.argv[8]
const speciality2: string = process.argv[9]
const speciality3: string = process.argv[10]
const speciality4: string = process.argv[11]
const speciality5: string = process.argv[12]
const speciality6: string = process.argv[13]
const speciality7: string = process.argv[14]

// REGISTER_STUDENT
const missionId: string = process.argv[5]
const studentId: string = process.argv[6]

// REGISTER_TEACHER
const teacherId: string = process.argv[6]


enum Operation {
    CREATE_NIGHT_MISSION = 'createNightMission',
    CREATE_FULLTIME_MISSION = 'createFullTimeMission',
    CREATE_STUDENT = 'createStudent',
    CREATE_TEACHER = 'createTeacher',
    REGISTER_STUDENT = 'registerStudent',
    REGISTER_TEACHER = 'registerTeacher',
    PRINT_STUDENTS = 'printStudents'
}



// ---------------------------- MEXENDO COM ARQUIVOS JSON

const misisonsFile = require('path').resolve(__dirname, '../missions.json')
const missions = new FileManager(misisonsFile);
const missionsJson = missions.readFile() as any[]
const mission = missionsJson.filter(mission => {
    const myMission = mission.name.indexOf("-na-night") !== -1 ?
        new NightMission(
            mission.id,
            mission.name,
            mission.startDate,
            mission.endDate,
            mission.teachersList,
            mission.studentsList,
            mission.currentModule)
        :
        new FullTimetMission(
            mission.id,
            mission.name,
            mission.startDate,
            mission.endDate,
            mission.teachersList,
            mission.studentsList,
            mission.currentModule)
    return myMission.getId() === Number(missionId)
})[0]


const studentsFile = require('path').resolve(__dirname, '../students.json')
const students = new FileManager(studentsFile)
const studentsJson = students.readFile() as Student[]


const teachersFile = require('path').resolve(__dirname, '../teachers.json')
const teachers = new FileManager(teachersFile)
const teachersJson = teachers.readFile() as Teacher[]


switch (operation) {

    case Operation.CREATE_NIGHT_MISSION: {
        if (id === undefined || name === undefined || startDate === undefined || endDate === undefined) {
            console.log('Passe os parâmetros requeridos')
        } else {
            const newNightMission = new NightMission(Number(id), name, startDate, endDate, [], [], Number(currentModule))
            try {
                missionsJson.push(newNightMission)
                missions.writeFile(missionsJson);
                console.log("\x1b[32m", 'Missão adicionada com sucesso')
            } catch (err) {
                console.error(err)
            }
        }
        break
    }

    case Operation.CREATE_FULLTIME_MISSION: {
        if (id === undefined || name === undefined || startDate === undefined || endDate === undefined) {
            console.log('Passe os parâmetros requeridos')
        } else {
            const newFullTimeMission = new FullTimetMission(Number(id), name, startDate, endDate, [], [], Number(currentModule))
            try {
                missionsJson.push(newFullTimeMission)
                missions.writeFile(missionsJson);
                console.log("\x1b[32m", 'Missão adicionada com sucesso')
            } catch (err) {
                console.error(err)
            }
        }
        break
    }

    case Operation.CREATE_STUDENT: {
        if (id === undefined || name === undefined || email === undefined || birthDate === undefined || hobby1 === undefined) {
            console.log('Passe os parâmetros requeridos')
        } else {
            let hobbylist = []
            hobbylist.push(hobby1)
            if (hobby2) hobbylist.push(hobby2)
            if (hobby3) hobbylist.push(hobby3)
            const newStudent = new Student(Number(id), name, email, birthDate, hobbylist)
            try {
                studentsJson.push(newStudent)
                students.writeFile(studentsJson)
                console.log("\x1b[32m", 'Estudante adicionado com sucesso')
            } catch (err) {
                console.error(err)
            }
        }
        break
    }

    case Operation.CREATE_TEACHER: {
        if (id === undefined || name === undefined || email === undefined || speciality1 === undefined) {
            console.log('Passe os parâmetros requeridos')
        } else {
            let specialitiesList = []
            specialitiesList.push(speciality1)
            if (speciality2) specialitiesList.push(speciality2)
            if (speciality3) specialitiesList.push(speciality3)
            if (speciality4) specialitiesList.push(speciality4)
            if (speciality5) specialitiesList.push(speciality5)
            if (speciality6) specialitiesList.push(speciality6)
            if (speciality7) specialitiesList.push(speciality7)
            const newTeacher = new Teacher(Number(id), name, email, specialitiesList)
            try {
                teachersJson.push(newTeacher)
                teachers.writeFile(teachersJson)
                console.log("\x1b[32m", 'Professor adicionado com sucesso')
            } catch (err) {
                console.error(err)
            }
        }
        break
    }

    case Operation.REGISTER_STUDENT: {
        if (missionId === undefined || studentId === undefined) {
            console.log('Informe o id da Missão e o id do Aluno')
        } else {
            // const mission = missionsJson.filter((mission: any) => mission.getId() === Number(missionId))[0]
            if (!mission) {
                console.log("Missão não encontrada")
            } else {
                const student = studentsJson.filter(student => student.id === Number(studentId))[0]
                if (!student) {
                    console.log("Estudante não encontrado")
                } else {
                    // não devia poder adicionar em outra turma tb
                    const findStudent = mission.studentsList.find((student: any) => student.id === Number(studentId))
                    if (findStudent) {
                        console.log("Estudante já adicionado a lista")
                    } else {
                        mission.studentsList.push(student)
                        missions.writeFile(missionsJson);
                        console.log("\x1b[32m", 'Estudante registrado na missão com sucesso')
                    }
                }
            }
        }
        break
    }

    case Operation.REGISTER_TEACHER: {
        if (missionId === undefined || teacherId === undefined) {
            console.log('Informe o id da Missão e o id do Professor')
        } else {
            if (!mission) {
                console.log("Missão não encontrada")
            } else {
                const teacher = teachersJson.filter(teacher => teacher.id === Number(studentId))[0]
                if (!teacher) {
                    console.log("Professor não encontrado")
                } else {
                    const findTeacher = mission.teachersList.find((teacher: any) => teacher.id === Number(teacherId))
                    if (findTeacher) {
                        console.log("Professor já adicionado a lista")
                    }
                    else {
                        mission.teachersList.push(teacher)
                        missions.writeFile(missionsJson);
                        console.log("\x1b[32m", 'Professor registrado na missão com sucesso')
                    }
                }
            }
        }
        break
    }

    case Operation.PRINT_STUDENTS: {
        studentsJson.map(student => {
            const mission = missionsJson.filter(mission =>
                mission.studentsList.find((studentThere: any) =>
                    studentThere.id === student.id))[0]
            const today: moment.Moment = moment()
            const informedDateOfBith: moment.Moment = moment(student.birthDate, "DD/MM/YYYY")
            const age = today.diff(informedDateOfBith, "years")

            // não entendi o que seria Curso
            return console.log(`
            Nome: ${student.name}
            Email: ${student.email}
            Turma: ${mission.name}
            Idade: ${age}`)
        })
        break
    }

    default:
        console.log('Informe uma operação válida')
        break

}

