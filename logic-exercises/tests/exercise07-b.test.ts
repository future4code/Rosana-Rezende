import { fatorial2 } from "../exercise07-b"

describe("Exercise 07", () => {

    it("should return 6 when receiving 3", () => {
        const num = 3
        const result = fatorial2(num)
        expect(result).toBe(6)
    })

    it("should return 1 when receiving 1", () => {
        const num = 1
        const result = fatorial2(num)
        expect(result).toBe(1)
    })

    it("should return 1 when receiving 0", () => {
        const num = 0
        const result = fatorial2(num)
        expect(result).toBe(1)
    })

})