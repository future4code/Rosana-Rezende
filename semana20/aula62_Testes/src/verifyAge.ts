export function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for(const user of users){
        if(casino.location === LOCATION.EUA){
            if(user.age >= 21){
                allowed.push(user)
            }
            else {
                unallowed.push(user)
            }
            
        }
        else if(casino.location === LOCATION.BRAZIL){
            if(user.age >= 18){
                allowed.push(user)
            }
            else {
                unallowed.push(user)
            }
        }
    }

    const allowedBrasilians = allowed.filter(user => user.nacionality === NACIONALITY.BRAZILIAN)
    const unallowedBrasilians = unallowed.filter(user => user.nacionality === NACIONALITY.BRAZILIAN)
    const allowedAmericans = allowed.filter(user => user.nacionality === NACIONALITY.AMERICAN)
    const unallowedAmericans = unallowed.filter(user => user.nacionality === NACIONALITY.AMERICAN)

    const result: Result = {
        brazilians: {
            allowed: allowedBrasilians.map(user => user.name),
            unallowed: unallowedBrasilians.map(user => user.name)
        },
        americans: {
            allowed: allowedAmericans.map(user => user.name),
            unallowed: unallowedAmericans.map(user => user.name)
        }
    }

    return result
}

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

interface Casino {
    name: string;
    location: LOCATION;
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

interface ResultItem {
    allowed: string[];
    unallowed: string[];
}