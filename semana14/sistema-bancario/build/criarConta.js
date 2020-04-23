"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const nome = process.argv[2];
const CPF = process.argv[3];
const dataDeNacimento = process.argv[4];
const banco = 'banco.json';
let contas = fs.readFileSync(banco).toString();
let contasJson = JSON.parse(contas);
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
        fs.writeFileSync(banco, JSON.stringify(contasJson, null, 4));
        console.log("\x1b[32m", 'Conta criada com sucesso');
    }
    catch (err) {
        console.error(err);
    }
}
function validarCPF() {
    let validador = contasJson.filter((conta) => conta.usuario.CPF === CPF);
    if (validador.length >= 1) {
        return false;
    }
    else {
        return true;
    }
}
const dataFormatada = dataDeNacimento.split('/');
const novaData = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`;
const aniversario = new Date(novaData);
const hoje = new Date();
const diferenca = hoje - aniversario;
const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
if (idade >= 18) {
    if (validarCPF()) {
        criarConta();
    }
    else {
        console.log("\x1b[31m", 'CPF já cadastrado');
    }
}
else {
    console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta');
}
//# sourceMappingURL=criarConta.js.map