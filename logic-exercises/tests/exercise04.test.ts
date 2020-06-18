import { onlyContainsNumbers } from "../exercise04"

describe("Exercise 04 - A", () => {

    it("Should return, when receiving a string, true if it only contains numbers and false if it contains any other character", () => {
        const stringTest1 = "123"
        const stringTest2 = "1 23"
        const stringTest3 = "123."
        const stringTest4 = "1a23"

        const result1 = onlyContainsNumbers(stringTest1)
        const result2 = onlyContainsNumbers(stringTest2)
        const result3 = onlyContainsNumbers(stringTest3)
        const result4 = onlyContainsNumbers(stringTest4)
        
        expect(result1).toEqual(true)
        expect(result2).toEqual(false)
        expect(result3).toEqual(false)
        expect(result4).toEqual(false)

    })

})