import { validateCharacter, Character } from "./validateCharacter";

// export function performAttack(attacker: Character, defender: Character) {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//         throw new Error("Invalid Character")
//     }

//     const result = attacker.force - defender.defense
//     if(defender.defense < attacker.force){
//         defender.life -= result
//     }
// }

export function performAttack(
    attacker: Character, 
    defender: Character,
    validator: (input: Character) => boolean
    ) {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }

    const result = attacker.force - defender.defense
    if(defender.defense < attacker.force){
        defender.life -= result
    }
}