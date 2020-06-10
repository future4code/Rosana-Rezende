export const handler = async (event: any) => {
    if (event.input.indexOf("@") === -1) {
        return {
            isEmail: false,
            reason: "Não possui '@' "
        };
    }

    if (event.input.indexOf(".") === -1) {
        return {
            isEmail: false,
            reason: "Não possui '.' "
        };
    }

    return {
        isEmail: true
    }
}

// // para testar
// const main = async () => {
//     const result1 = await handler({ input: "abc.com.br" })
//     const result2 = await handler({ input: "abc@abc" })
//     const result3 = await handler({ input: "abc@abc.com.br" })

//     console.log("1. ", result1)
//     console.log("2. ", result2)
//     console.log("3. ", result3)
// }

// main()