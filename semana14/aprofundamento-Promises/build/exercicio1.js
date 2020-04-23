"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.readdir('./textos', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        let promises = [];
        files.forEach(file => {
            const myPromiseText = new Promise((resolve, reject) => {
                fs_1.readFile(`./textos/${file}`, (err, data) => {
                    try {
                        const fileContent = data.toString();
                        resolve(fileContent);
                    }
                    catch (e) {
                        reject(err);
                    }
                });
            });
            promises.push(myPromiseText);
        });
        Promise.all(promises)
            .then(result => {
            const replaces = {
                sed: '\x1b[31msed\x1b[0m',
                ' id ': '\x1b[31m id \x1b[0m',
                ' do ': '\x1b[36m do \x1b[0m'
            };
            const resultFormated = result.join();
            const resultWithColors = resultFormated.replace(/sed| id | do /g, i => replaces[i]);
            console.log(resultWithColors);
        })
            .catch(err => {
            console.log(err);
        });
    }
});
//# sourceMappingURL=exercicio1.js.map