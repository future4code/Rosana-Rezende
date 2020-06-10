import { checkStringsEqual2 } from "../exercise03-b"


describe("Exercise 03 - B", () => {

    it("Should return, when receiving 2 strings, if they are equal or not, REGARDLESS of whether the characters are uppercase or lowercase", () => {
        const stringTest1 = "escola"
        const stringTest2 = "escola"
        const result = checkStringsEqual2(stringTest1, stringTest2)
        expect(result).toEqual(true)

        const stringTest3 = "Escola"
        const result2 = checkStringsEqual2(stringTest1, stringTest3)
        expect(result2).toEqual(true)

        const stringTest4 = "casa"
        const result3 = checkStringsEqual2(stringTest1, stringTest4)
        expect(result3).toEqual(false)
    })

})