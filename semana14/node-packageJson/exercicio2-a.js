// cria arquivo e a primeira tarefa

const fs = require('fs')
const listaDeTarefas = process.argv[2]
const novaTarefa = process.argv[3]

try{
    fs.writeFileSync(listaDeTarefas, novaTarefa)
    console.log('Lista de tarefas ', listaDeTarefas, ' criada com sucesso e primeira tarefa inserida com sucesso')
} catch (err) {
    console.error(err)
}