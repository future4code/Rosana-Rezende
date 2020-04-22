import * as fs from 'fs'

const nome: string = process.argv[2]
const CPF: string = process.argv[3]
const dataDeNacimento: string = process.argv[4]

const dateFormated: string[] = dataDeNacimento.split('/')
const day: string = dateFormated[0]
const month: string = dateFormated[1]
const year: string = dateFormated[2]
const newDate: string = `${year}/${month}/${day}`
const birthday: any = new Date(newDate)
const today: any = new Date()
const time: any = today - birthday
const age: any = Math.floor(time / (1000 * 60 * 60 * 24 * 365.25));

const fileName = 'conta.json'
let conta: object

if(age > 18){
    conta = {
        usuario: {
            nome: nome,
            CPF: CPF,
            dataDeNascimento: dataDeNacimento
        },
        saldo: 0,
        extrato: []
    }
    // fs.writeFileSync(fileName, conta)
    console.log("\x1b[32m", 'Conta criada com sucesso')
} else {
    console.log("\x1b[31m", 'Não é possível cria conta')
}