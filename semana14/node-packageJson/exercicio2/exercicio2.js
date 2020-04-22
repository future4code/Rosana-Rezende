const fs = require('fs')
const listaDeTarefas = process.argv[2]
const novaTarefa =  process.argv[3]
const novaTarefaFormatada = `
${novaTarefa}`

try{
    fs.appendFileSync(listaDeTarefas, novaTarefaFormatada, 'utf8')
    console.log("\x1b[32m", 'Tarefa inserida com sucesso')
} catch (err) {
    console.error(err)
}