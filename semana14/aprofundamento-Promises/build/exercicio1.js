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
            myPromiseText
                .then(result => {
            })
                .catch(err => {
                console.error(err);
            });
            promises.push(myPromiseText);
        });
        Promise.all(promises)
            .then(result => {
            const resultado = result.join();
            console.log(resultado);
        })
            .catch(err => {
            console.log(err);
        });
    }
});
//# sourceMappingURL=exercicio1.js.map