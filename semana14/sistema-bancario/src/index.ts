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
const valor: any = process.argv[7] // pode ocupar a mesma posição?

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
    data: moment.Moment
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

if (operacao === 'buscarTodasContas') {
    console.log(contas)
}

else if (operacao === 'criarConta') {
    if (nome === undefined || CPF === undefined || dataDeNacimento === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e data de nascimento')
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

        const dataDeNacimentoFormatada: moment.Moment = moment(dataDeNacimento, "DD/MM/YYYY")
        const hoje: moment.Moment = moment()
        const idade = hoje.diff(dataDeNacimentoFormatada, "years")

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

else if (operacao === 'pegarSaldo') {
    if (nome === undefined || CPF === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome e CPF')
    }
    else {
        if (validarExisteCPF()) {
            let contaPesquisada: conta[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
            if(contaPesquisada[0].usuario.nome === nome){
                let contaObjeto: conta = contaPesquisada[0]
                const saldoFormatado: string = contaObjeto.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                console.log('Saldo:', saldoFormatado)
            } else {
                console.log('Informe nome de usuário correspondente ao CPF')
            }
        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido')
        }
    }
}

else if (operacao === 'adicionarSaldo') {
    if (nome === undefined || CPF === undefined || valor === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e valor que deseja adicionar ao saldo')
    } else {
        if (validarExisteCPF) {
            let contaPesquisada: conta[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
            let contaObjeto: conta = contaPesquisada[0]
            contaObjeto.saldo += Number(valor)
            writeFileSync(banco, JSON.stringify(contasJson, null, 4))
            const saldoFormatado: string = contaObjeto.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            console.log('Seu novo saldo é de', saldoFormatado)
        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido')
        }
    }
}

else if (operacao === 'pagarConta') {
    if (nome === undefined || CPF === undefined || valor === undefined || descricao === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a pagar e descrição')
    }
    else {
        const dataDePagamentoFormatada: moment.Moment = moment(dataDePagamento, "DD/MM/YYYY")
        const hoje: moment.Moment = moment()
        const diferenca = hoje.diff(dataDePagamentoFormatada, "days")

        const contaPesquisada: conta[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
        const saldoNaConta: number = contaPesquisada[0].saldo

        if (diferenca > 0) {
            console.log('\x1b[31m', 'Não é possível realizar pagamentos com datas anteriores ao dia vigente')
        }
        else if (valor > saldoNaConta) {
            console.log('\x1b[31m', 'Não há saldo suficiente para realizar essa operação')
        }
        else {
            if (dataDePagamento === undefined) {
                dataDePagamento = hoje.format("DD/MM/YYYY")
            }
            const novoPagamento: infoExtrato = {
                valor: Number(valor),
                descricao: descricao,
                data: dataDePagamento
            }
            const contaObjeto: conta = contaPesquisada[0]
            contaObjeto.saldo -= Number(valor)
            contaObjeto.extrato.push(novoPagamento)
            writeFileSync(banco, JSON.stringify(contasJson, null, 4))
            console.log("\x1b[32m", 'Pagamento realizado com sucesso:', '\x1b[0m', novoPagamento)

            // esses pagamentos no futuro eu deveria agendar? como?
        }
    }

}

else if (operacao === 'transferenciaInterna') {
    if (nome === undefined || CPF === undefined || valor === undefined || nomeDoDestinatario === undefined || CPFDoDestinatario === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a transferir, nome do Destinatário e CPF do destinário')
    }
    else {
        if (!validarExisteCPF()) {
            console.log('\x1b[31m', 'Informe um CPF de remetente válido')
        }
        else {
            const pesquisaContaDestinatario: conta[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPFDoDestinatario)
            if (pesquisaContaDestinatario.length < 1) {
                console.log('\x1b[31m', 'Informe um CPF de destinatário válido')
            }

            else {
                const contaPesquisada: conta[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
                const saldoNaConta: number = contaPesquisada[0].saldo
                if (valor > saldoNaConta) {
                    console.log('\x1b[31m', 'Não há saldo suficiente para realizar essa operação')
                }

                else {
                    const contaRemetente: conta = contaPesquisada[0]
                    contaRemetente.saldo -= Number(valor)

                    const contaDestinatario: conta = pesquisaContaDestinatario[0]
                    contaDestinatario.saldo += Number(valor)
                    writeFileSync(banco, JSON.stringify(contasJson, null, 4))

                    const valorTranferido = Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    const nomeDoDestinatario = contaDestinatario.usuario.nome
                    console.log(`\x1b[32mTransferência de ${valorTranferido} para ${nomeDoDestinatario} realizada do sucesso!\x1b[0m`)
                }
            }
        }
    }
}

else {
    console.log('\x1b[31m', 'Faça uma operação válida')
}