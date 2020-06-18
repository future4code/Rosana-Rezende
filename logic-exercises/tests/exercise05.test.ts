import { transformTime } from "../exercise05"

describe("Exercise 05", () => {

    it("should return '30s' when receiving 30 ", () => {
        const seconds = 30
        const result = transformTime(seconds)
        expect(result).toBe('30s')
    })

    it("should return '5m 50s' when receiving 350 ", () => {
        const seconds = 350
        const result = transformTime(seconds)
        expect(result).toBe('5m 50s')
    })

    it("should return '1h 02m 05s' when receiving 3725 ", () => {
        const seconds = 3725
        const result = transformTime(seconds)
        expect(result).toBe('1h 02m 05s')
    })

})