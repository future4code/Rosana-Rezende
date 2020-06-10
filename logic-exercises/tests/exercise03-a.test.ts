import { checkStringsEqual } from "../exercise03-a"

describe("Exercise 03 - A", () => {

    it("Should return, when receiving 2 strings, if they are equal or not, considering whether the characters are uppercase or lowercase", () => {
        const stringTest1 = "escola"
        const stringTest2 = "escola"
        const result = checkStringsEqual(stringTest1, stringTest2)
        expect(result).toEqual(true)

        const stringTest3 = "Escola"
        const result2 = checkStringsEqual(stringTest1, stringTest3)
        expect(result2).toEqual(false)
    })

})