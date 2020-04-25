"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require("moment");
moment.locale('pt-br');
const operacao = process.argv[4];
const nome = process.argv[5];
const CPF = process.argv[6];
const dataDeNacimento = process.argv[7];
const valor = process.argv[7];
const descricao = process.argv[8];
let dataDePagamento = process.argv[9];
const nomeDoDestinatario = process.argv[8];
const CPFDoDestinatario = process.argv[9];
const banco = require('path').resolve(__dirname, '../banco.json');
let contas = fs_1.readFileSync(banco).toString();
let contasJson = JSON.parse(contas);
function validarExisteCPF() {
    let validador = contasJson.filter((conta) => conta.usuario.CPF === CPF);
    if (validador.length >= 1) {
        return true;
    }
    else {
        return false;
    }
}
if (operacao === 'buscarTodasContas') {
    console.log(contas);
}
else if (operacao === 'criarConta') {
    if (nome === undefined || CPF === undefined || dataDeNacimento === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e data de nascimento');
    }
    else {
        let novaConta = {
            usuario: {
                nome: nome,
                CPF: CPF,
                dataDeNascimento: dataDeNacimento
            },
            saldo: 0,
            extrato: []
        };
        function criarConta() {
            try {
                contasJson.push(novaConta);
                fs_1.writeFileSync(banco, JSON.stringify(contasJson, null, 4));
                console.log("\x1b[32m", 'Conta criada com sucesso');
            }
            catch (err) {
                console.error(err);
            }
        }
        const dataDeNacimentoFormatada = moment(dataDeNacimento, "DD/MM/YYYY");
        const hoje = moment();
        const idade = hoje.diff(dataDeNacimentoFormatada, "years");
        if (idade >= 18) {
            if (validarExisteCPF()) {
                console.log("\x1b[31m", 'CPF já cadastrado');
            }
            else {
                criarConta();
            }
        }
        else {
            console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta');
        }
    }
}
else if (operacao === 'pegarSaldo') {
    if (nome === undefined || CPF === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome e CPF');
    }
    else {
        if (validarExisteCPF()) {
            let contaPesquisada = contasJson.filter((conta) => conta.usuario.CPF === CPF);
            if (contaPesquisada[0].usuario.nome === nome) {
                let contaObjeto = contaPesquisada[0];
                const saldoFormatado = contaObjeto.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                console.log('Saldo:', saldoFormatado);
            }
            else {
                console.log('Informe nome de usuário correspondente ao CPF');
            }
        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido');
        }
    }
}
else if (operacao === 'adicionarSaldo') {
    if (nome === undefined || CPF === undefined || valor === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e valor que deseja adicionar ao saldo');
    }
    else {
        if (validarExisteCPF()) {
            let contaPesquisada = contasJson.filter((conta) => conta.usuario.CPF === CPF);
            if (contaPesquisada[0].usuario.nome === nome) {
                let contaObjeto = contaPesquisada[0];
                contaObjeto.saldo += Number(valor);
                const hoje = moment();
                const novoSaldo = {
                    valor: Number(valor),
                    descricao: "Depósito de dinheiro",
                    data: hoje.format("DD/MM/YYYY")
                };
                contaObjeto.extrato.push(novoSaldo);
                fs_1.writeFileSync(banco, JSON.stringify(contasJson, null, 4));
                const saldoFormatado = contaObjeto.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                console.log('Saldo atualizado:', saldoFormatado);
            }
            else {
                console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF');
            }
        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido');
        }
    }
}
else if (operacao === 'pagarConta') {
    if (nome === undefined || CPF === undefined || valor === undefined || descricao === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a pagar e descrição');
    }
    else {
        if (validarExisteCPF()) {
            const contaPesquisada = contasJson.filter((conta) => conta.usuario.CPF === CPF);
            if (contaPesquisada[0].usuario.nome === nome) {
                const dataDePagamentoFormatada = moment(dataDePagamento, "DD/MM/YYYY");
                const hoje = moment();
                const diferenca = hoje.diff(dataDePagamentoFormatada, "days");
                const saldoNaConta = contaPesquisada[0].saldo;
                if (diferenca > 0) {
                    console.log('\x1b[31m', 'Não é possível realizar pagamentos com datas anteriores ao dia vigente');
                }
                else if (valor > saldoNaConta) {
                    console.log('\x1b[31m', 'Não há saldo suficiente para realizar essa operação');
                }
                else {
                    if (dataDePagamento === undefined) {
                        dataDePagamento = hoje.format("DD/MM/YYYY");
                    }
                    const novoPagamento = {
                        valor: Number(valor),
                        descricao: descricao,
                        data: dataDePagamento
                    };
                    const contaObjeto = contaPesquisada[0];
                    contaObjeto.extrato.push(novoPagamento);
                    fs_1.writeFileSync(banco, JSON.stringify(contasJson, null, 4));
                    console.log("\x1b[32m", 'Pagamento realizado com sucesso:', '\x1b[0m', novoPagamento);
                }
            }
            else {
                console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF');
            }
        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido');
        }
    }
}
else if (operacao === 'atualizarSaldo') {
    if (nome === undefined || CPF === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome e CPF');
    }
    else {
        if (validarExisteCPF()) {
            const contaPesquisada = contasJson.filter((conta) => conta.usuario.CPF === CPF);
            if (contaPesquisada[0].usuario.nome === nome) {
                const extratoFiltado = contaPesquisada[0].extrato.filter((despesa) => {
                    const hoje = moment();
                    const dataDaDespesa = moment(despesa.data, "DD/MM/YYYY");
                    const diferenca = hoje.diff(dataDaDespesa, "days");
                    return diferenca > 0;
                });
                const totalDespesasPassadas = extratoFiltado.reduce((valorInicial, despesa) => {
                    return valorInicial + despesa.valor;
                }, 0);
                contaPesquisada[0].saldo -= totalDespesasPassadas;
                fs_1.writeFileSync(banco, JSON.stringify(contasJson, null, 4));
                const saldoFormatado = contaPesquisada[0].saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                console.log('Saldo atualizado:', saldoFormatado);
            }
            else {
                console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF');
            }
        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido');
        }
    }
}
else if (operacao === 'transferenciaInterna') {
    if (nome === undefined || CPF === undefined || valor === undefined || nomeDoDestinatario === undefined || CPFDoDestinatario === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a transferir, nome do Destinatário e CPF do destinário');
    }
    else {
        if (!validarExisteCPF()) {
            console.log('\x1b[31m', 'Informe um CPF de remetente válido');
        }
        else {
            const pesquisaContaDestinatario = contasJson.filter((conta) => conta.usuario.CPF === CPFDoDestinatario);
            if (pesquisaContaDestinatario.length < 1) {
                console.log('\x1b[31m', 'Informe um CPF de destinatário válido');
            }
            else {
                const contaPesquisada = contasJson.filter((conta) => conta.usuario.CPF === CPF);
                const saldoNaConta = contaPesquisada[0].saldo;
                if (valor > saldoNaConta) {
                    console.log('\x1b[31m', 'Não há saldo suficiente para realizar essa operação');
                }
                else {
                    const hoje = moment();
                    const contaRemetente = contaPesquisada[0];
                    const novoTransferenciaRemetente = {
                        valor: Number(valor),
                        descricao: 'Dinheiro enviado por transferência',
                        data: hoje.format("DD/MM/YYYY")
                    };
                    contaRemetente.extrato.push(novoTransferenciaRemetente);
                    const contaDestinatario = pesquisaContaDestinatario[0];
                    const novoTransferenciaDestinatario = {
                        valor: Number(valor),
                        descricao: 'Dinheiro recebido por transferência',
                        data: hoje.format("DD/MM/YYYY")
                    };
                    contaDestinatario.extrato.push(novoTransferenciaDestinatario);
                    fs_1.writeFileSync(banco, JSON.stringify(contasJson, null, 4));
                    const valorTranferido = Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                    const nomeDoDestinatario = contaDestinatario.usuario.nome;
                    console.log(`\x1b[32mTransferência de ${valorTranferido} para ${nomeDoDestinatario} realizada do sucesso!\x1b[0m`);
                }
            }
        }
    }
}
else {
    console.log('\x1b[31m', 'Faça uma operação válida');
}
//# sourceMappingURL=index.js.map