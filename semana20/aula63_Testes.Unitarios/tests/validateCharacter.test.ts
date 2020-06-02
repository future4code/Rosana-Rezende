import { validateCharacter } from "../src/validateCharacter"

describe("Testing validateCharacter", () => {

    // a
    it("Should return false when the character's name is empty", () => {
        const input = {
            name: "",
            life: 10,
            defense: 10,
            force: 10
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)

    })

    // b
    it("Should return false when the character's life is empty", () => {
        const input = {
            name: "Rosana",
            life: undefined,
            defense: 10,
            force: 10
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    // c
    it("Should return false when the character's force is empty", () => {
        const input = {
            name: "Rosana",
            life: 10,
            defense: 10,
            force: undefined
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    // d
    it("Should return false when the character's defense is empty", () => {
        const input = {
            name: "Rosana",
            life: 10,
            defense: undefined,
            force: 10
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })
    
    // e
    it("Should return false when the character's life, force or defense is negative", () => {
        const input1 = {
            name: "Rosana",
            life: -10,
            defense: 10,
            force: 10
        }
        const input2 = {
            name: "Rosana",
            life: 10,
            defense: -10,
            force: 10
        }
        const input3 = {
            name: "Rosana",
            life: 10,
            defense: 10,
            force: -10
        }
        const output1 = validateCharacter(input1)
        const output2 = validateCharacter(input2)
        const output3 = validateCharacter(input3)
        expect(output1).toBe(false)
        expect(output2).toBe(false)
        expect(output3).toBe(false)
    })

    // f
    it("Should return true when the character's life, force or defense is 0", () => {
        const input1 = {
            name: "Rosana",
            life: 0,
            defense: 10,
            force: 10
        }
        const input2 = {
            name: "Rosana",
            life: 10,
            defense: 0,
            force: 10
        }
        const input3 = {
            name: "Rosana",
            life: 10,
            defense: 10,
            force: 0
        }
        const output1 = validateCharacter(input1)
        const output2 = validateCharacter(input2)
        const output3 = validateCharacter(input3)
        expect(output1).toBe(true)
        expect(output2).toBe(true)
        expect(output3).toBe(true)
    })

    // g
    it("Should return true when the character's input is valid", () => {
        const input = {
            name: "Rosana",
            life: 10,
            defense: 10,
            force: 10
        }
        const output = validateCharacter(input)
        expect(output).toBe(true)
    })

})