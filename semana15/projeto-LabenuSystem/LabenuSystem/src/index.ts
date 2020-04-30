import { NightMission } from "./classes/NightMission";
import { Teacher } from "./classes/Teacher";
import { FullTimetMission } from "./classes/FullTimeMission";

const newNightMission = new NightMission(1, "lala-na-night", "30/04/2020", "12/12/2020", [], [], 1)
// console.log(newNightMission)

const newFullTimeMission = new FullTimetMission(2, "lolo", "01/01/2020", "06/06/2020", [], [], 7)

const newTeacher = new Teacher(1, "Prof Bananinha", "lalala", ["React"])
// console.log(newTeacher)

