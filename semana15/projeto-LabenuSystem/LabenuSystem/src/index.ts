import { NightMission } from "./classes/NightMission";
import { FullTimetMission } from "./classes/FullTimeMission";
import { Teacher } from "./classes/Teacher";
import { Student } from "./classes/Student";

// CRIAR 2 TURMAS
const turmaSaganNoturna = new NightMission(1, "Sagan-na-night", "30/04/2020", "12/12/2020", [], [], 1)
// console.log(turmaSaganNoturna)

const turmaSagan = new FullTimetMission(2, "Sagan", "01/01/2020", "06/06/2020", [], [], 5)
// console.log(turmaSagan)


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