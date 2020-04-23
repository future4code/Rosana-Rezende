"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const operation = process.argv[4];
const postNumber = process.argv[5];
if (operation === 'getPost') {
    const post = axios_1.default.get(`${baseUrl}/${postNumber}`);
    post.then(result => {
        console.log(result.data);
    })
        .catch(err => {
        console.error(err);
    });
}
else {
    console.error('\x1b[31m', 'Faça uma operação válida');
}
//# sourceMappingURL=exercicio2-1.js.map