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
const banco = 'banco.json';
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
            let contaObjeto = contaPesquisada[0];
            const saldoFormatado = contaObjeto.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            console.log('Seu saldo é de', saldoFormatado);
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
        if (validarExisteCPF) {
        }
        else {
            console.log('\x1b[31m', 'Informe um CPF válido');
        }
    }
}
else if (operacao === 'pagarConta') {
    const dataDePagamentoFormatada = moment(dataDePagamento, "DD/MM/YYYY").unix();
    const hoje = moment().unix();
    if (nome === undefined || CPF === undefined || valor === undefined || descricao === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a pagar, descrição e data de pagamento');
    }
    else if (dataDePagamentoFormatada < hoje) {
    }
    else {
        if (dataDePagamento === undefined) {
            dataDePagamento = new Date();
        }
    }
}
else if (operacao === 'transferenciaInterna') {
    if (nome === undefined || CPF === undefined || valor === undefined || nomeDoDestinatario === undefined || CPFDoDestinatario === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a transferir, nome do Destinatário e CPF do destinário');
    }
    else {
    }
}
else {
    console.log('\x1b[31m', 'Faça uma operação válida');
}
//# sourceMappingURL=index.js.map