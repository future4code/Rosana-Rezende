// / tranforma em assíncrona - não consegui
// let myPromiseText
// readdir('./', (err: Error, files: any) => {
//     if(err){
//         return
//     } else {
//         myPromiseText = new Promise<string>((resolve, reject) => {

//             readFile(banco, (err: Error, data: Buffer) => {
//                 try{
//                     const bancoConteudo: string = data.toString()
//                     resolve(bancoConteudo)
//                 } catch(error) {
//                     reject(err)
//                 }
//             })

//         })
//         myPromiseText.then(result => {
//              console.log(result)
//             return result
//         })
//     }
// })

// console.log(myPromiseText)

import {
    readFileSync, writeFileSync,
    // readFile, readdir
} from 'fs'

const operation: string = process.argv[4]
const nome: string = process.argv[5]
const CPF: string = process.argv[6]
const dataDeNacimento: string = process.argv[7]

const banco: string = 'banco.json'
let contas = readFileSync(banco).toString()
let contasJson = JSON.parse(contas)

type conta = {
    usuario: {
        nome: string,
        CPF: string,
        dataDeNascimento: string
    },
    saldo: number,
    extrato: any[] // vai possuir o valor, a data e uma descrição
}

if (operation === 'criarConta') {
    if (nome === undefined || CPF === undefined || dataDeNacimento === undefined) {
        console.log('\x1b[31m','Passe os parâmetros necessários: nome, CPF e data de nascimento')
    }
    else {
        

        let novaConta: conta = {
            usuario: {
                nome: nome,
                CPF: CPF,
                dataDeNascimento: dataDeNacimento
            },
            saldo: 0,
            extrato: []
        }

        function validarExisteCPF(): boolean {
            let validador: object[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
            if (validador.length >= 1) {
                return false
            } else {
                return true
            }
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

        const dataFormatada: string[] = dataDeNacimento.split('/')
        const novaData: string = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`
        const aniversario: any = new Date(novaData) // não funciona number (quebra ele) nem Date (quebra o cálculo de time)
        const hoje: any = new Date()
        const diferenca: number = hoje - aniversario
        const idade: number = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
        if (idade >= 18) {
            if (validarExisteCPF()) {
                criarConta()
            } else {
                console.log("\x1b[31m", 'CPF já cadastrado')
            }
        } else {
            console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta')
        }
    }
} 

else if (operation === 'pegarSaldo'){
    if (nome === undefined || CPF === undefined) {
        console.log('\x1b[31m','Passe os parâmetros necessários: nome e CPF')
    }
    else {
        let contaPesquisada: object[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
        let contaObjeto: object = contaPesquisada[0]
        console.log(contaObjeto) // não consegui acessar contaObjeto.saldo

        console.log('Seu saldo é de R$ ')
    }
}

else {
    console.log('\x1b[31m', 'Faça uma operação válida')
}