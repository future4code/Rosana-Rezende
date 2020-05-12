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

_Resposta_: `Round (ou cost)` representa o fator relacionado à segurança da senha: quanto maior o custo, mais segura e também maior o tempo de execução. É preciso avaliar o quanto queremos equelibrar segurança e tempo, mas a média usada pela maior parte das libs é 12. Também usei o valor 12, pois testei na minha máquina e não atrapalhou o desempenho.
`Salt`, por sua vez, é uma string aleatória adicionada no texto antes de criar a hash, o que confere uma camada adicional de proteção, evitando os chamados rainbow table.

<br>

*b. Instale o bcryptjs no seu projeto e comece criando a classe HashManager. Por ora, implemente a função que **criptografe** uma string usando o bcryptjs.*


_Resposta_:
```ts
export class HashManager {
    public async hash(plaintext: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)
        return hash
    }    
}
```

<br>

*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*


_Resposta_:
```ts
export class HashManager {
    //...
    public async compare(plaintext: string, hash: string): Promise<boolean> {
        const result = await bcrypt.compare(plaintext, hash)
        return result
    }
}
```

<br><br>


### Exercício 2

Na aula de ontem, implementamos os endpoints de *singup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso. 

<br>

*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

_Resposta_: Primeiro é necessário alterar o cadastro, pois só será possível realizar o login, comparando a hash com as informações do banco de dados, se essas informações já estiverem atualizadas no respectivo banco de dados.

<br>

*b. Faça a alteração do primeiro endpoint*

_Resposta_:
```ts
app.post("/signup", async(req: Request, res: Response) => {
    try{
        const email = req.body.email
        if(email === ""){
            throw new Error("O campo email não pode ficar vazio")
        }
        if(!email.includes("@")){
            throw new Error("Informe um email válido")
        }

        const password = req.body.password
        if(password.length < 6){
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const userDataBase = new UserDatabase()
        await userDataBase.createUser(id, email, hashPassword)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(id)

        res.status(200).send({
            token
        })

    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})
```

<br>

*c. Faça a alteração do segundo endpoint*

_Resposta_:
```ts
app.post("/login", async(req: Request, res: Response) => {
    try{
        const email = req.body.email
        if(email === ""){
            throw new Error("O campo email não pode ficar vazio")
        }
        if(!email.includes("@")){
            throw new Error("Informe um email válido")
        }

        const password = req.body.password

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserByEmail(email)

        const hashManager = new HashManager()
        const compareResult = await hashManager.compare(password, user.password)

        // if(user.password !== password){
        //     throw new Error("Senha incorreta")
        // }
        if(!compareResult){
            throw new Error("Senha incorreta")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(user.id)

        res.status(200).send({
            token
        })
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})
```

<br>

*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

_Resposta_: Acredito que não é preciso modificá-lo, uma vez que o que ele espera receber é um token, o que já é possível gerar com as modificações do login e do signup.

<br><br>


### Exercício 3

Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.

<br>

*a. Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

_Resposta_:
```sql
ALTER TABLE User
ADD COLUMN role VARCHAR(255) DEFAULT "normal"
```

<br>

*b. Altere a interface `AuthenticationData` e `Authenticator` para representarem esse novo tipo no token.*

_Resposta_:
```ts
import * as jwt from "jsonwebtoken"

export class Authenticator {
    // private static EXPIRES_IN = "1min";

    private static getExpiresIn(): number {
        return Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
    }

    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            // input
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            {
                // expiresIn: Authenticator.EXPIRES_IN,
                expiresIn: Authenticator.getExpiresIn()
            }
        )
        return token
    }

    public verify(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    };

}

interface AuthenticationData {
    id: string, 
    role: string
}
```

<br>

*c. Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*

_Resposta_:

Foram 2 alterações

```ts
export class UserDatabase {
  // ...
  public async createUser(
        id: string,
        email: string,
        password: string,
        role: string
    ): Promise<void> {
        await this.connection()
            .insert({
                id,
                email,
                password,
                role
            })
            .into(UserDatabase.TABLE_NAME)
    }
}
```

e

```ts
app.post("/signup", async(req: Request, res: Response) => {
    try{
        const email = req.body.email
        if(email === ""){
            throw new Error("O campo email não pode ficar vazio")
        }
        if(!email.includes("@")){
            throw new Error("Informe um email válido")
        }

        const password = req.body.password
        if(password.length < 6){
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        const role = req.body.role

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const userDataBase = new UserDatabase()
        await userDataBase.createUser(id, email, hashPassword, role)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id,
            role
        })

        res.status(200).send({
            token
        })

    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})
```

<br>

*d. Altere o login para criar o token com o `role` do usuário*

_Resposta_:
```ts
app.post("/login", async(req: Request, res: Response) => {
    try{
        const email = req.body.email
        if(email === ""){
            throw new Error("O campo email não pode ficar vazio")
        }
        if(!email.includes("@")){
            throw new Error("Informe um email válido")
        }

        const password = req.body.password

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserByEmail(email)

        const hashManager = new HashManager()
        const compareResult = await hashManager.compare(password, user.password)

        if(!compareResult){
            throw new Error("Senha incorreta")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        })

        res.status(200).send({
            token
        })
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})
```

<br><br>

### Exercício 4

Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint. 

*a. Altere o endpoint para que retorne um erro de `Unauthorized` para os usuários que "não sejam normais" e tentem acessar esse endpoint*

_Resposta_:
```ts
app.get("/user/profile", async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const userAuthData = authenticator.verify(token)

        if(userAuthData.role !== "normal"){
            throw new Error("Unauthorized")
        }

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserById(userAuthData.id)       

        res.status(200).send({
            id: user.id,
            email: user.email
        })
        
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})
```

<br><br>

### Exercício 5

Implemente o endpoint que realizará a deleção de um usuário. As especificações são:

- *Verbo/Método*: **DELETE**
- *Path:* `/user/:id`
- Somente admins podem acessar esse endpoint

_Resposta_:
```ts
app.delete("/user/:id", async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const userAuthData = authenticator.verify(token)

        if(userAuthData.role !== "admin"){
            throw new Error("Unauthorized")
        }

        const id = req.params.id

        const userDataBase = new UserDatabase()
        await userDataBase.deleteUser(id) 

        res.sendStatus(200)

    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})
```

<br><br>

### Exercício 6

Implemente o endpoint que retorne as informações (id e email) de um usuário a partir do seu id. As especificações são:

- *Verbo/Método*: **GET**
- *Path:* `/user/:id`
- Tanto admins como usuários normais conseguem usar essa funcionalidade

_Resposta_:
```ts
app.get("/user/:id", async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        authenticator.verify(token)
        
        const id = req.params.id

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserById(id)       

        res.status(200).send({
            id: user.id,
            email: user.email
        })
        
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})
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
import knex from "knex"
import Knex from "knex"

export abstract class BaseDatabase {
    private static KNEX_CONNECTION: Knex | null = null

    protected connection(): Knex{
        if(BaseDatabase.KNEX_CONNECTION === null){
            BaseDatabase.KNEX_CONNECTION = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT || "3306"),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                },
            });
        }
        return BaseDatabase.KNEX_CONNECTION
    }

    public static async destroyConnection(){
        if(BaseDatabase.KNEX_CONNECTION !== null){
            await BaseDatabase.KNEX_CONNECTION.destroy()
            BaseDatabase.KNEX_CONNECTION = null
        }
    }

}
```

e

```ts
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  // ...
}
```

<br>

*b. Utilize o método `destroyConnection` nos momentos oportunos (vulgo, no final dos endpoints)*

_Resposta_:
```ts
await BaseDatabase.destroyConnection()
```

<br><br>

## Desafios

O desafio é simples: o nosso backend está com muito código repetido (é só ver o quão parecido o login e o singup estão). Faça um refactor do código criando uma estrutura que permite reutilizar melhor o código.
