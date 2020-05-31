# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Projeto: To Do List


<br><br>

### Escopo

Nesse projeto trabalharemos com algo que já estamos habituados, a To Do List. Já fizemos *Front*, *Front Integrado* e até usamos *somente Node* nela, mas dessa vez faremos o **Back**.

Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

<br><br>

### Endpoins Mínimos

<br>

*1. Criar usuário*

**Método:** PUT
**Path:** `/user`

**Body:**

```json
{
	"name": "Astro Dev",
	"nickname": "astrodev",
	"email": "astro@dev.com"
}
```

**Observações**:

- O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
- O seu código deve gerar o id do usuário

<br>

*2. Pegar usuário pelo id*

**Método:** GET
**Path:** `/user/:id`

**Path Param**: é o id do usuário

**Body de Resposta:**

```json
{
	"id": "001",
	"nickname": "astrodev"
}
```

**Observações**:

- O seu código deve validar se o id do usuário foi enviado
- O endpoint deve retornar um erro se não encontrar o usuário

<br>

*3. Editar usuário*

**Método:** POST
**Path:** `/user/edit`

**Body:**

```json
{
	"name": "Astro Dev",
	"nickname": "astrodev"
}
```

**Observações**:

- O seu código só deve alterar o que for enviado
- Se algum valor enviado for vazio, deve retornar um erro

<br>

*4. Criar tarefa*

**Método:** PUT
**Path:** `/task`

**Body:**

```json
{
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"limitDate": "04/05/2020",
	"creatorUserId": "001"
}
```

**Observações**:

- O seu código deve validar se todos os campos não estão vazios,
- O seu código deve gerar o id da tarefa,
- A data deve se recebida no formato mostrado acima: `DD/MM/YYYY` e o seu código deve fazer a conversão necessária para salvar no banco

<br>

*5. Pegar tarefa pelo id*

**Método:** GET
**Path:** `/task/:id`

**Path Param**: é o id da tarefa

**Body de Resposta:**

```json
{
	"taskId": "001",
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"limitDate": "04/05/2020",
	"status": "to_do",
	"creatorUserId": "001",
	"creatorUserNickname": "astrodev"
}
```

**Observações**:

- O seu código deve validar se o id da task foi enviado
- O endpoint deve retornar um erro se não encontrar a task
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

<br><br>

### Desafios

<br>

*6. Pegar todos os usuários*

**Método:** GET
**Path:** `/user/all`

**Body de Resposta:**

```json
{
	"users": [{
		"id": "001",
		"nickname": "astrodev"
	}]
}
```

**Observações**:

- O endpoint deve retornar um array vazio se não encontrar os resultados

<br>

*7. Pegar tarefas criadas por um usuário*

**Método:** GET
**Path:** `/task?creatorUserId=id`

**Query String:** indica o id do usuário que criou através da chave `creatorUserId`

**Body de Resposta:**

```json
{
	"tasks": [{
		"taskId": "001",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"limitDate": "04/05/2020",
		"creatorUserId": "001",
		"status": "to_do",
		"creatorUserNickname": "astrodev"
	}]
}
```

**Observações**:

- O seu código deve verificar se foi enviado o `creatorUserId` e devolver um erro específico caso não tenha sido
- O endpoint deve retornar um array vazio se não encontrar os resultados
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

<br>

*8. Pesquisar usuário*

**Método:** GET
**Path:** `/user?query=id`

**Query String:** indica o termo de busca através da chave `query`

**Body de Resposta:**

```json
{
	"users": [{
		"id": "001",
		"nickname": "astrodev",
	}]
}
```

**Observações**:

- O seu código deve verificar se foi enviado a `query` e devolver um erro específico caso não tenha sido
- O endpoint deve retornar um array vazio se não encontrar os resultados

<br>

*9. Atribuir um usuário responsável a uma tarefa*

**Método:** POST
**Path:** `/task/responsible`

**Body:**

```json
{
	"task_id": "Astro Dev",
	"responsible_user_id": "astrodev"
}
```

**Observações**:

- O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios

<br>

*10. Pegar usuários responsáveis por uma tarefa*

**Método:** GET
**Path:** `/task/:id/responsible`

**Path Param**: é o id da tarefa

**Body de Resposta:**

```json
{
	"users": [{
		"id": "001",
		"nickname": "astrodev"
	}]
}
```

**Observações**:

- O seu código deve validar se o id da task foi enviado
- O endpoint deve retornar um erro se não encontrar a task

<br>

*11. Pegar tarefa pelo id*

**Método:** GET
**Path:** `/task/:id`

**Path Param**: é o id da tarefa

**Body de Resposta:**

```json
{
	"taskId": "001",
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"limitDate": "04/05/2020",
	"creatorUserId": "001",
	"creatorUserNickname": "astrodev",
	"responsibleUsers": [
		{
			"id": "001",
			"nickname": "astrodev"
		}
	]
}
```

**Observações**:

- O seu código deve validar se o id da task foi enviado
- O endpoint deve retornar um erro se não encontrar a task
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador e de todos os usuários responsáveis
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

<br>

*12. Atualizar o status da tarefa*

**Method:** POST

**Path:** `/task/status/edit`

**Body:**

```json
{
	"status": "doing"
}
```

**Observações**:

- O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios

<br>

*13. Pegar todas as tarefas por status*

**Método:** GET
**Path:** `/task?status=valor_do_status`

**Query String:** indica o status através da chave `status`

**Body de Resposta:**

```json
{
	"tasks": [{
		"taskId": "001",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"limitDate": "04/05/2020",
		"creatorUserId": "001",
		"creatorUserNickname": "astrodev"
	}]
}
```

**Observações**:

- O seu código deve validar se o status da task foi enviado
- O endpoint deve retornar um array vazio se não encontrar nenhum resultado
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

<br>

*14. Pegar todas as tarefas atrasadas*

**Método:** GET
**Path:** `/task/delayed`

**Body de Resposta:**

```json
{
	"tasks": [{
		"taskId": "001",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"limitDate": "04/05/2020",
		"creatorUserId": "001",
		"creatorUserNickname": "astrodev"
	}]
}
```

**Observações**:

- O seu código deve validar se o status da task foi enviado
- O endpoint deve retornar um erro se não encontrar a task
- O endpoint deve retornar um array vazio se não encontrar nenhum resultado
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

<br>

*15. Retirar um usuário responsável de uma tarefa*

**Método:** DELETE
**Path:** `/task/:taskId/responsible/:responsibleUserId`

**Path Param**: o primeiro indica o id da task (`taskId`)e o segundo o id do usuário responsável (`responsibleUserId`)

**Observações**:

- O seu código deve validar se os ids da task e do usuário foiram enviados
- O endpoint deve retornar um erro se não encontrar a task, ou se não encontrar o usuário ou se o usuário não for responsável por essa tarefa, antes de deletar

<br>

*16. Atribuir mais de um responsável a uma tarefa*

**Método:** POST
**Path:** `/task/responsible`

**Body:**

```json
{
	"task_id": "001",
	"responsible_user_ids": ["001"]
}
```

**Observações**:

- O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
- O seu código deve verificar se a task e todos os usuários existem
- Perceba que ele possui o mesmo path do endpoint do exercício 9. A ideia é que você utilize o mesmo endpoint, altere-o para que funcione com um array de ids de usuário.

<br>

*17. Procurar tarefa por termos*

**Método:** GET
**Path:** `/task?query=tarefa`

**Query String:** indica o termo de busca através da chave `query`

**Body de Resposta:**

```json
{
	"tasks": [{
		"taskId": "001",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"limitDate": "04/05/2020",
		"creatorUserId": "001",
		"creatorUserNickname": "astrodev",
	}]
}
```

**Observações**:

- O seu código deve validar se o status da task foi enviado
- O endpoint deve retornar um erro se não encontrar a task
- O endpoint deve retornar um array vazio se não encontrar nenhum resultado
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

<br>

*18. Atualizar o status de várias tarefas*

**Método:** POST
**Path:** `/task/status/edit`

**Body:**

```json
{
	"task_ids": ["001"],
	"status": "done"
}
```

**Observações**:

- O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
- O seu código deve verificar se todas as tasks existem
- Perceba que ele possui o mesmo path do endpoint do exercício 12. A ideia é que você utilize o mesmo endpoint, altere-o para que funcione com um array de ids de task.

<br>

*19. Deletar tarefa*

**Método:** DELETE
**Path:** `/task/:id`

**Path Param**: o parâmetro indica o id da task (`taskId`)

**Observações**:

- O seu código deve validar se o id da task foi enviado
- Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas

<br>

*20. Deletar usuário*

**Método:** DELETE
**Path:** `/user/:id`

**Path Param**: o parâmetro indica o id do usuário (`id`)

**Observações**:

- O seu código deve validar se o id do usuário foi enviado
- Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas
- Além disso, todas as tasks criadas por esse usuário devem ser deletas e todas as relações de responsáveis atraeladas a essas tasks

<br>