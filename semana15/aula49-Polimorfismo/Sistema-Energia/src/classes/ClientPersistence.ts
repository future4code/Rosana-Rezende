export class ClientPersistence {
    public static CLIENTS_REGISTRATION_NUMBER: number[] = [];

    public static ADD_REGISTRATION(registration: number): void {
        ClientPersistence.CLIENTS_REGISTRATION_NUMBER.push(registration)
    }
}