export const fatorial2 = (num: number): number => {
    if(num <= 1) return 1
    return num * fatorial2(num - 1)
}