import { performPurchase } from "../src/performPurchase"

describe("Testing performPurchase", () => {

    it("Should return new user if balance is greater than purchase price", () => {
        const user = {
            name: "Rosana",
            balance: 50
        }
        const value = 40
        const output = performPurchase(user, value)
        const newUser = {
            name: "Rosana",
            balance: 10
        }
        expect(output).toEqual(newUser)
    })

    it("Should return new user if balance is equal to purchase price", () => {
        const user = {
            name: "Rosana",
            balance: 50
        }
        const value = 50
        const output = performPurchase(user, value)
        const newUser = {
            name: "Rosana",
            balance: 0
        }
        expect(output).toEqual(newUser)
    })

    it("Should return undefined if balance is less than purchase price", () => {
        const user = {
            name: "Rosana",
            balance: 50
        }
        const value = 60
        const output = performPurchase(user, value)
        expect(output).toBe(undefined)
    })


})