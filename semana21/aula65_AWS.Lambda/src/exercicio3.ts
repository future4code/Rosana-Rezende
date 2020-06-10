export const handler = async(event: any) => {
    return event.num1 + event.num2
}

// para testar
// const main = async() => {
//     const result = await handler({
//         num1: 1,
//         num2: 2
//     })
//     console.log(result)
// }

// main()