"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const post1 = axios_1.default.get(`${baseUrl}/1`);
const post2 = axios_1.default.get(`${baseUrl}/2`);
const post3 = axios_1.default.get(`${baseUrl}/3`);
Promise.all([post1, post2, post3])
    .then((result) => {
    result.map(post => {
        console.log(post.data.title);
    });
})
    .catch(err => {
    console.error(err);
});
//# sourceMappingURL=exercicio2.js.map