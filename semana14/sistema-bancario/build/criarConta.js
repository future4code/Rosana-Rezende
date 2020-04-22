"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const nome = process.argv[2];
const CPF = process.argv[3];
const dataDeNacimento = process.argv[4];
const dateFormated = dataDeNacimento.split('/');
const day = dateFormated[0];
const month = dateFormated[1];
const year = dateFormated[2];
const newDate = `${year}/${month}/${day}`;
const birthday = new Date(newDate);
const today = new Date();
const time = today - birthday;
const age = Math.floor(time / (1000 * 60 * 60 * 24 * 365.25));
const fileName = 'conta.json';
let conta;
if (age > 18) {
    conta = {
        usuario: {
            nome: nome,
            CPF: CPF,
            dataDeNascimento: dataDeNacimento
        },
        saldo: 0,
        extrato: []
    };
    fs.writeFileSync(fileName, conta);
    console.log("\x1b[32m", 'Conta criada com sucesso');
}
else {
    console.log("\x1b[31m", 'Não é possível cria conta');
}
//# sourceMappingURL=criarConta.js.map