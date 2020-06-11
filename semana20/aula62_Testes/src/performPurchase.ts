export function performPurchase(user: User, value: number): User | undefined {
    if(user.balance >= value){
        const newUser: User = {
            name: user.name, // ...user,
            balance: user.balance - value
        }
        return newUser
    }
    return undefined
}

interface User {
    name: string,
    balance: number
}