import { fillArray } from "../exercise08"

describe("Exercise 08", () => {

    it("Should return [0, 1, 2, 3, 4] when receive [2, 3, 4] and 0", () => {
        const arr = [2, 3, 4]
        const num = 0
        const result = fillArray(arr, num)
        expect(result).toEqual([0, 1, 2, 3, 4])
    })

    it("Should return [11, 15, 17, 18, 19, 20] when receive [11, 15, 17] and 20", () => {
        const arr = [11, 15, 17]
        const num = 20
        const result = fillArray(arr, num)
        expect(result).toEqual([11, 15, 17, 18, 19, 20])
    })

    it("Should return [100, 310, 520] when receive [100, 310, 520] and 200", () => {
        const arr = [100, 310, 520]
        const num = 200
        const result = fillArray(arr, num)
        expect(result).toEqual([100, 310, 520])
    })

    it("Should return [10, 11, 12, 13, 14, 78, 90] when receive [14, 78, 90] and 10", () => {
        const arr = [14, 78, 90]
        const num = 10
        const result = fillArray(arr, num)
        expect(result).toEqual([10, 11, 12, 13, 14, 78, 90])
    })
})
