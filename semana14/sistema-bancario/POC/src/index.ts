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

const valor: any = process.argv[7]

const descricao: string = process.argv[8]
let dataDePagamento: any = process.argv[9]

const nomeDoDestinatario: string = process.argv[8]
const CPFDoDestinatario: string = process.argv[9]

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
    extrato: infoExtrato[]
}

const banco = require('path').resolve(__dirname, '../banco.json')

let contas = readFileSync(banco).toString()

// // Pq esse código não funciona? ele volta undefined... só não entendo pq
// const contas2 = readFile(banco, (err: Error, data: Buffer) => {
//     try {
//         let bancoConteudo: string = data.toString()
//         console.log(bancoConteudo) // aqui volta direitinho
//         return bancoConteudo
//     } catch (error) {
//         console.error(err)
//     }
// })
// console.log(contas2)

let contasJson: conta[] = JSON.parse(contas)

// usada em várias funcionalidades
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
            if (contaPesquisada[0].usuario.nome === nome) {
                let contaObjeto: conta = contaPesquisada[0]
                const saldoFormatado: string = contaObjeto.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                console.log('Saldo:', saldoFormatado)
            }
            else {
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
        if (validarExisteCPF()) {
            let contaPesquisada: conta[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
            if (contaPesquisada[0].usuario.nome === nome) {
                let contaObjeto: conta = contaPesquisada[0]
                contaObjeto.saldo += Number(valor)

                const hoje: moment.Moment = moment()
                const novoSaldo: infoExtrato = {
                    valor: Number(valor),
                    descricao: "Depósito de dinheiro",
                    data: hoje.format("DD/MM/YYYY")
                }
                contaObjeto.extrato.push(novoSaldo)

                writeFileSync(banco, JSON.stringify(contasJson, null, 4))
                const saldoFormatado: string = contaObjeto.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                console.log('Saldo atualizado:', saldoFormatado)
            }
            else {
                console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF')
            }
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
        if (validarExisteCPF()) {
            const contaPesquisada: conta[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)

            if (contaPesquisada[0].usuario.nome === nome) {


                const dataDePagamentoFormatada: moment.Moment = moment(dataDePagamento, "DD/MM/YYYY")
                const hoje: moment.Moment = moment()
                const diferenca = hoje.diff(dataDePagamentoFormatada, "days")

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
                    // contaObjeto.saldo -= Number(valor) //opa, eles não querem que atualize agora
                    contaObjeto.extrato.push(novoPagamento)
                    writeFileSync(banco, JSON.stringify(contasJson, null, 4))
                    console.log("\x1b[32m", 'Pagamento realizado com sucesso:', '\x1b[0m', novoPagamento)

                }
            }
            else {
                console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF')
            }

        } else {
            console.log('\x1b[31m', 'Informe um CPF válido')
        }
    }

}

else if (operacao === 'atualizarSaldo') {
    if (nome === undefined || CPF === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome e CPF')
    } else {
        if (validarExisteCPF()) {
            const contaPesquisada: conta[] = contasJson.filter((conta: conta) => conta.usuario.CPF === CPF)
            if (contaPesquisada[0].usuario.nome === nome) {
                const extratoFiltado = contaPesquisada[0].extrato.filter((despesa: infoExtrato) => {
                    const hoje: moment.Moment = moment()
                    const dataDaDespesa: moment.Moment = moment(despesa.data, "DD/MM/YYYY")
                    const diferenca = hoje.diff(dataDaDespesa, "days")
                    return diferenca > 0
                })
                const totalDespesasPassadas = extratoFiltado.reduce((valorInicial: number, despesa: infoExtrato) => {
                    return valorInicial + despesa.valor
                }, 0)
                contaPesquisada[0].saldo -= totalDespesasPassadas
                writeFileSync(banco, JSON.stringify(contasJson, null, 4))
                const saldoFormatado: string = contaPesquisada[0].saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                console.log('Saldo atualizado:', saldoFormatado)

                // mas ainda deixo essas informações no extrato? toda vez que rodar essa função vai subtrair elas do saldo
                    // uma solução seria, se essa função rodasse todos os dias no mesmo horário, colocar que ela tem que rodar apenas para o que é no dia de hoje, desconsiderando os dias anteriores, que já foram computados

            }
            else {
                console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF')
            }

        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido')
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
                    const hoje: moment.Moment = moment()

                    const contaRemetente: conta = contaPesquisada[0]
                    const novoTransferenciaRemetente: infoExtrato = {
                        valor: Number(valor),
                        descricao: 'Dinheiro enviado por transferência',
                        data: hoje.format("DD/MM/YYYY")
                    }
                    // contaRemetente.saldo -= Number(valor)
                    contaRemetente.extrato.push(novoTransferenciaRemetente)

                    const contaDestinatario: conta = pesquisaContaDestinatario[0]
                    const novoTransferenciaDestinatario: infoExtrato = {
                        valor: Number(valor),
                        descricao: 'Dinheiro recebido por transferência',
                        data: hoje.format("DD/MM/YYYY")
                    }
                    // contaDestinatario.saldo += Number(valor)
                    contaDestinatario.extrato.push(novoTransferenciaDestinatario)

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