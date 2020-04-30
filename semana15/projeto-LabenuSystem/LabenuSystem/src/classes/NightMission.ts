import { Mission } from "./abstracts/Mission";
import { NightMissionName } from "./restrictions/NightMissionName";
import { Teacher } from "./Teacher";
import { Student } from "./Student";


export class NightMission extends Mission {

    constructor(
        id: number,
        name: string,
        startDate: string,
        endDate: string,
        teachersList: Teacher[],
        studentsList: Student[],
        currentModule?: number // como bloquear pra que seja 1 a 7 ou undefined?
    ) {
        super(id, name, startDate, endDate, teachersList, studentsList, currentModule)
        
        // garantindo que o nome termina com -na-night
        const endName = name.endsWith(NightMissionName.END_MISSION_NAME)
        if(endName){
            this.name = name
        } else {
            throw new Error(`Não é possível criar nome sem o final "-na-night"`)
        }

    }
    
}
