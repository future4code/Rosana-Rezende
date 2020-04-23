import { readFileSync, readFile, writeFileSync } from 'fs'

const nome: string = process.argv[2]
const CPF: string = process.argv[3]
const dataDeNacimento: string = process.argv[4]

const banco: string = 'banco.json'

/// tranforma em assíncrona
// const handleFileRead = (err: Error, data: Buffer) => {
//     try{
//         const bancoConteudo: string = data.toString()
//         return bancoConteudo
//     } catch(error) {
//         console.error('Erro: ', err, error)
//     }
// }


// let contas = readFile(banco, handleFileRead)
let contas = readFileSync(banco).toString()
let contasJson = JSON.parse(contas)

type conta = {
    usuario: {
        nome: string,
        CPF: string,
        dataDeNascimento: string
    },
    saldo: number, 
    extrato: any[] // vai ser de números?
}

let novaConta: conta = {
    usuario: {
        nome: nome,
        CPF: CPF,
        dataDeNascimento: dataDeNacimento
    },
    saldo: 0,
    extrato: []
}

function criarConta(): void {
    try {
        contasJson.push(novaConta)
        writeFileSync(banco, JSON.stringify(contasJson, null, 4))
        console.log("\x1b[32m", 'Conta criada com sucesso')
    } catch (err) {
        console.error(err)
    }
}

function validarExisteCPF(): boolean {
    let validador: object[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
    if(validador.length >= 1){
        return false
    } else {
        return true
    }
}
// e pra validar o formato do CPF???


const dataFormatada: string[] = dataDeNacimento.split('/')
const novaData: string = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`
const aniversario: any = new Date(novaData) // não funciona number (quebra ele) nem Date (quebra o cálculo de time)
const hoje: any = new Date() 
const diferenca: number = hoje - aniversario
const idade: number = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));

if (idade >= 18) {
    if(validarExisteCPF()){
        criarConta()
    } else {
        console.log("\x1b[31m", 'CPF já cadastrado')
    }
} else {
    console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta')
}