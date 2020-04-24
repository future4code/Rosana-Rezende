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
import * as moment from 'moment'
moment.locale('pt-br')

const operacao: string = process.argv[4]
const nome: string = process.argv[5]
const CPF: string = process.argv[6]
const dataDeNacimento: string = process.argv[7]
const valor: string = process.argv[7] // pode ocupar a mesma posição?

const descricao: string = process.argv[8]
let dataDePagamento: any = process.argv[9]

const nomeDoDestinatario: string = process.argv[8]
const CPFDoDestinatario: string = process.argv[9]

const banco: string = 'banco.json'
let contas = readFileSync(banco).toString()
let contasJson = JSON.parse(contas)

type infoExtrato = {
    valor: number,
    descricao: string,
    data: any
}

type conta = {
    usuario: {
        nome: string,
        CPF: string,
        dataDeNascimento: string
    },
    saldo: number,
    extrato: infoExtrato[] // vai possuir o valor, a data e uma descrição
}

function validarExisteCPF(): boolean {
    let validador: object[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
    if (validador.length >= 1) {
        return true
    } else {
        return false
    }
}

if (operacao === 'criarConta') {
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

        

        function criarConta(): void {
            try {
                contasJson.push(novaConta)
                writeFileSync(banco, JSON.stringify(contasJson, null, 4))
                console.log("\x1b[32m", 'Conta criada com sucesso')
            } catch (err) {
                console.error(err)
            }
        }

        // const dataFormatada: string[] = dataDeNacimento.split('/')
        // const novaData: string = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`
        // const aniversario: number = new Date(novaData).getTime() // com getTime aceita number
        const dataDeNacimentoFormatada: moment.Moment = moment(dataDeNacimento, "DD/MM/YYYY")

        // const hoje: number = new Date().getTime()
        const hoje: moment.Moment = moment()
            
        // const diferenca: number = hoje - aniversario
        // const idade: number = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
        const idade = hoje.diff(dataDeNacimentoFormatada, "years")      
        console.log(idade)
        if (idade >= 18) {
            if (validarExisteCPF()) {
                console.log("\x1b[31m", 'CPF já cadastrado')
            } else {
                criarConta()
            }
        } else {
            console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta')
        }
    }
} 

else if(operacao === 'buscarTodasContas'){

}

else if (operacao === 'pegarSaldo'){
    if (nome === undefined || CPF === undefined) {
        console.log('\x1b[31m','Passe os parâmetros necessários: nome e CPF')
    }
    else {
        if(validarExisteCPF()){
            let contaPesquisada: object[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
            let contaObjeto: object = contaPesquisada[0]
            console.log(contaObjeto) // não consegui acessar contaObjeto.saldo
    
            console.log('Seu saldo é de R$ ')
        } 
        else {
            console.log('\x1b[31m', 'Informe um CPF válido')
        }
    }
}

else if(operacao === 'adicionarSaldo'){
    if (nome === undefined || CPF === undefined || valor === undefined) {
        console.log('\x1b[31m','Passe os parâmetros necessários: nome, CPF e valor que deseja adicionar ao saldo')
    } else {
        if(validarExisteCPF){
            let contaPesquisada: object[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
            let contaObjeto: object = contaPesquisada[0]
            console.log(contaObjeto)
            // preciso adicionar o valor ao saldo do objeto
    
            // muda algo no extrato???
        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido')
        }
    }
}

else if(operacao === 'pagarConta'){
    // const dataFormatada: string[] = dataDePagamento.split('/')
    // const novaData: string = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`
    // const dataDePagamentoFormatada: number = new Date(novaData).getTime() // com getTime aceita number
    const dataDePagamentoFormatada: number = moment(dataDePagamento, "DD/MM/YYYY").unix()
    
    // const hoje: number = new Date().getTime()
    const hoje: number = moment().unix()

    if (nome === undefined || CPF === undefined || valor === undefined || descricao === undefined) {
        console.log('\x1b[31m','Passe os parâmetros necessários: nome, CPF, valor a pagar, descrição e data de pagamento')
    } 
    else if(dataDePagamentoFormatada < hoje){
        // continua...
    }
    else {
        if(dataDePagamento === undefined){
            dataDePagamento = new Date()
        }

        // continua...


        // muda algo no extrato????

    }

}

else if(operacao === 'transferenciaInterna'){
    if (nome === undefined || CPF === undefined || valor === undefined || nomeDoDestinatario === undefined || CPFDoDestinatario === undefined) {
        console.log('\x1b[31m','Passe os parâmetros necessários: nome, CPF, valor a transferir, nome do Destinatário e CPF do destinário')
    }
    else {
        // continua...
    }
}

else {
    console.log('\x1b[31m', 'Faça uma operação válida')
}