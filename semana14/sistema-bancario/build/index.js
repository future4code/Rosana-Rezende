"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
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
if (operacao === 'criarConta') {
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
        const dataFormatada = dataDeNacimento.split('/');
        const novaData = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`;
        const aniversario = new Date(novaData);
        const hoje = new Date();
        const diferenca = hoje - aniversario;
        const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
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
else if (operacao === 'buscarTodasContas') {
}
else if (operacao === 'pegarSaldo') {
    if (nome === undefined || CPF === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome e CPF');
    }
    else {
        if (validarExisteCPF()) {
            let contaPesquisada = contasJson.filter((conta) => conta.usuario.CPF === CPF);
            let contaObjeto = contaPesquisada[0];
            console.log(contaObjeto);
            console.log('Seu saldo é de R$ ');
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
        let contaPesquisada = contasJson.filter((conta) => conta.usuario.CPF === CPF);
        let contaObjeto = contaPesquisada[0];
        console.log(contaObjeto);
    }
}
else if (operacao === 'pagarConta') {
    if (nome === undefined || CPF === undefined || valor === undefined || descricao === undefined) {
        console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a pagar, descrição e data de pagamento');
    }
    else if (dataDePagamento === 'valor no passado... fazer a lógica') {
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