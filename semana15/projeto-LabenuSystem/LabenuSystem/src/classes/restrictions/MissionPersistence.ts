export class MissionPersistence {
    static ID_NUMBERS: number[] = []
    
    static ADD_ID(id: number): void {
        MissionPersistence.ID_NUMBERS.push(id)
    }
}