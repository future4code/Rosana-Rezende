export class PersonPersistence {
    static ID_NUMBERS: number[] = []
    
    static ADD_ID(id: number): void {
        PersonPersistence.ID_NUMBERS.push(id)
    }
}