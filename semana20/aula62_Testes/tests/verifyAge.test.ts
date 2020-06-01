import { verifyAge, LOCATION, NACIONALITY } from "../src/verifyAge"

describe("Testing verifyAge", () => {

    it("should a brazilian user aged 18 or older enter a casino in Brazil", () => {
        const casino = {
            name: "Casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const users = [
            {
                name: "Rosana",
                age: 18,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]
        const output = verifyAge(casino, users)
        const result = {
            brazilians: {
                allowed: ["Rosana"],
                unallowed: []
            },
            americans: {
                allowed: [],
                unallowed: []
            }
        }
        expect(output).toEqual(result)

    })


    it("should a american user aged 18 or older enter a casino in Brazil", () => {
        const casino = {
            name: "Casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const users = [
            {
                name: "Cleiton",
                age: 18,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        const result = {
            brazilians: {
                allowed: [],
                unallowed: []
            },
            americans: {
                allowed: ["Cleiton"],
                unallowed: []
            }
        }
        expect(output).toEqual(result)
    })

    it("should 2 american users and 2 brazilian users, aged 19, not be allowed to enter a casino in EUA", () => {
        const casino = {
            name: "Casino Americano",
            location: LOCATION.EUA
        }
        const users = [
            {
                name: "Rosana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Mariana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Cleiton",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Maurício",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        const result = {
            brazilians: {
                allowed: [],
                unallowed: ["Rosana", "Mariana"]
            },
            americans: {
                allowed: [],
                unallowed: ["Cleiton", "Maurício"]
            }
        }
        expect(output).toEqual(result)
    })

    it("should 2 american users, aged 21, enter a casino in EUA - and 2 brazilian users, aged 19, not be allowed to enter a casino in EUA", () => {
        const casino = {
            name: "Casino Americano",
            location: LOCATION.EUA
        }
        const users = [
            {
                name: "Rosana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Mariana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Cleiton",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Maurício",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        const result = {
            brazilians: {
                allowed: [],
                unallowed: ["Rosana", "Mariana"]
            },
            americans: {
                allowed: ["Cleiton", "Maurício"],
                unallowed: []
            }
        }
        expect(output).toEqual(result)
        
    })

})