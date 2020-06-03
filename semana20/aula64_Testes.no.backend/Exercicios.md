# Labenu | Full-Stack Web Development Bootcamp

Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 64 - Testes no Backend

### Exercício 1

Vamos começar implementando o endpoint que permite receber um id e devolve as informações do usuário com esse id. Deve retornar um erro caso o usuário não exista.

**Verbo**: GET

**Path:** `/users/profile/:id`

**Input**: Path parameter representando o id do usuário

**Output**:

Body:

```json
{
    "id": "35b62ff4-64af-4721-a4c5-d038c6f730cf",
    "name": "Astrodev",
    "email": "astrodev@gmail.com",
    "role": "ADMIN"
}
```

*a. Implemente a função*

_Resposta_:

```ts
```

<br><br>

### Exercício 2

Vamos criar dois testes (unitários) para essa função `getUserById`:

*a. Erro de usuário não existente. Você deve verificar se:*

- *O código de erro está correto*
- *Se a mensagem está correta*

_Resposta_:

```ts
```

<br>

*b. Resposta de sucesso. Você deve verificar se:*

- *Todas as funções mockadas foram chamadas (com os inputs corretos)*
- *A resposta de sucesso em si*

_Resposta_:

```ts
```

<br><br>

### Exercício 3

Agora, vamos implementar o endpoint que permite a administradores verem todos os usuários do sistema. Deve retornar um erro caso o usuário não seja admin.

**Verbo**: GET

**Path:** `/users/all`

**Input**: Nenhum

**Output**:

Body:

```json
[{
    "id": "35b62ff4-64af-4721-a4c5-d038c6f730cf",
    "name": "Astrodev",
    "email": "astrodev@gmail.com",
    "role": "ADMIN"
}]
```

*a. Implemente a função*

_Resposta_:

```ts
```

<br><br>

### Exercício 4

Vamos criar dois testes (unitários) para essa função `getAllUsers`: 

*a. Erro de  não autorizado. Você deve verificar se:*

- *O código de erro está correto*
- *Se a mensagem está correta*

_Resposta_:

```ts
```

<br>

*b. Resposta de sucesso. Você deve verificar se:*

- *Todas as funções mockadas foram chamadas*
- *A resposta de sucesso em si*

_Resposta_:

```ts
```

<br><br>

### Exercício 5

Por fim, vamos implementar o endpoint que permite a um usuário ver o seu próprio perfil. Deve retornar um erro caso o usuário não exista

**Verbo**: GET

**Path:** `/users/profile`

**Input**: Nenhum

**Output**:

Body:

```json
{
    "id": "35b62ff4-64af-4721-a4c5-d038c6f730cf",
    "name": "Astrodev",
    "email": "astrodev@gmail.com",
    "role": "ADMIN"
}
```

*a. Implemente a função*

_Resposta_:

```ts
```

<br><br>

### Exercício 6

Agora, escreva ao menos 2 testes para essa função. Pense no que é mais importante de se testar!


_Resposta_:

```ts
```

<br><br>

### DESAFIO

Existe uma outra forma para criar os mocks de classes/interfaces. Ele é mais **elegante**, mas também é mais **confuso**. Leia o artigo abaixo (que explica sobre isso) e refaça os testes que você criou hoje

[ES6 Class Mocks · Jest](https://jestjs.io/docs/en/es6-class-mocks)

_Resposta_:

```ts
```
