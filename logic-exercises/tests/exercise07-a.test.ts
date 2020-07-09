import { fatorial } from "../exercise07-a"

describe("Exercise 07", () => {

    it("should return 6 when receiving 3", () => {
        const num = 3
        const result = fatorial(num)
        expect(result).toBe(6)
    })

    it("should return 1 when receiving 1", () => {
        const num = 1
        const result = fatorial(num)
        expect(result).toBe(1)
    })

})