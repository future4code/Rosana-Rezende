import { stringReverse } from "../exercise06"

describe("Exercise 06", () => {

    it("should return 'alocse' when receiving 'escola'", () => {
        const text = "escola"
        const result = stringReverse(text)
        expect(result).toBe('alocse')
    })

})