"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = 'https://jsonplaceholder.typicode.com';
const operation = process.argv[4];
const postNumber = process.argv[5];
const postNumber2 = process.argv[6];
const postNumber3 = process.argv[7];
if (operation === 'getPost') {
    const post = axios_1.default.get(`${baseUrl}/posts/${postNumber}`);
    post.then(result => {
        console.log(result.data);
    })
        .catch(err => {
        console.error(err);
    });
}
else if (operation === 'getPosts') {
    const post1 = axios_1.default.get(`${baseUrl}/posts/${postNumber}`);
    const post2 = axios_1.default.get(`${baseUrl}/posts/${postNumber2}`);
    const post3 = axios_1.default.get(`${baseUrl}/posts/${postNumber3}`);
    Promise.all([post1, post2, post3])
        .then((result) => {
        result.map(post => {
            console.log(post.data);
        });
    })
        .catch(err => {
        console.error(err);
    });
}
else if (operation === 'getPostComments') {
    const postComments = axios_1.default.get(`${baseUrl}/comments?postId=${postNumber}`);
    postComments.then(result => {
        console.log(result.data);
    })
        .catch(err => {
        console.error(err);
    });
}
else {
    console.log('\x1b[31m', 'Faça uma operação válida');
}
//# sourceMappingURL=exercicio2-1.js.map