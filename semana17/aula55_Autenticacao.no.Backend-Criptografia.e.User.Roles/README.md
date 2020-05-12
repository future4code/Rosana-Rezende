# Labenu | Full-Stack Web Development Bootcamp

Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 55 - Autenticação no Backend: Criptografia e User Roles

Nos exercícios vamos treinar modificações no projeto iniciado na aula 54:

- adicionar criptografia
- criar a classe BaseDatabase
- User Roles

<br>

### Exercício 1

A primeira implementação que vamos fazer refere-se à classe que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à saída da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 

Abaixo, há o exemplo de uso da função de *hash*

```tsx
import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
```

<br>

*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

_Resposta_:
```ts

```

<br>

*b. Instale o bcryptjs no seu projeto e comece criando a classe HashManager. Por ora, implemente a função que **criptografe** uma string usando o bcryptjs.*


_Resposta_:
```ts

```

<br>

*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `verify` do bcryptjs*


_Resposta_:
```ts

```

<br><br>


### Exercício 2

Na aula de ontem, implementamos os endpoints de *singup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso. 

<br>

*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

_Resposta_:
```ts

```

<br>

*b. Faça a alteração do primeiro endpoint*

_Resposta_:
```ts

```

<br>

*c. Faça a alteração do segundo endpoint*

_Resposta_:
```ts

```

<br>

*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

_Resposta_:
```ts

```

<br><br>

### Exercício 3

Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.

<br>

*a. Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

_Resposta_:
```ts

```

<br>

*b. Altere a interface `AuthenticationData` e `Authenticator` para representarem esse novo tipo no token.*

_Resposta_:
```ts

```

<br>

*c. Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*

_Resposta_:
```ts

```

<br>

*d. Altere o login para crair o token com o `role` do usuário*

_Resposta_:
```ts

```

<br><br>

### Exercício 4

Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint. 

*a. Altere o endpoint para que retorne um erro de `Unauthorized` para os usuários que "não sejam normais" e tentem acessar esse endpoint*

_Resposta_:
```ts

```

<br><br>

### Exercício 5

Implemente o endpoint que realizará a deleção de um usuário. As especificações são:

- *Verbo/Método*: **DELETE**
- *Path:* `/user/:id`
- Somente admins podem acessar esse endpoint

_Resposta_:
```ts

```

<br><br>

### Exercício 6

Implemente o endpoint que retorne as informações (id e email) de um usuário a partir do seu id. As especificações são:

- *Verbo/Método*: **GET**
- *Path:* `/user/:id`
- Tanto admins como usuários normais conseguem usar essa funcionalidade

_Resposta_:
```ts

```

<br><br>

### Exercício 7

Para encerrar, vamos introduzir uma nova classe na nossa aplicação: `BaseDatabase`. Ela deve ser usada como classe pai de todas aquelas que se comunicam com o banco de dados. Seguem as suas especificações:

- Deve ser uma classe abstrata,
- Deve possuir um método `static` que retorne a `connection` da classe (ou seja a variável com as configurações necessárias para a comunicação com o banco)
- Deve possuir um método `static` chamado `destroyConnection`, que deve encerrar a conexão com o banco de dados

<br>

*a. Implemente essa classe e faça com que o `UserDatabase` a implemente. Faça todas as alterações necessárias nessa classe.*

_Resposta_:
```ts

```

<br>

*b. Utilize o método `destroyConnection` nos momentos oportunos (vulgo, no final dos endpoints)*

_Resposta_:
```ts

```

<br><br>

## Desafios

O desafio é simples: o nosso backend está com muito código repetido (é só ver o quão parecido o login e o singup estão). Faça um refactor do código criando uma estrutura que permite reutilizar melhor o código.
