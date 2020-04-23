"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const handleFileRead = (err, data) => {
    try {
        const fileContent = data.toString();
        return fileContent;
    }
    catch (e) {
        console.error('Deu erro: ', err);
    }
};
fs_1.readdir('./textos', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        files.map(file => {
            const content = fs_1.readFile(file, handleFileRead);
            console.log(content);
        });
    }
});
//# sourceMappingURL=exercicio1.js.map