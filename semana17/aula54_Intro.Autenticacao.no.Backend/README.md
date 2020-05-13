# Labenu | Full-Stack Web Development Bootcamp

Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 54 - Autenticação no Backend: introdução

Nos exercícios vamos treinar os seguintes endpoints:

- singup
- login
- user/profile

<br>

### Exercício 1

Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso.

O uso dele é simples, veja abaixo:

```tsx
import { v4 } from "uuid";

const id = v4();

console.log("Generated Id: ", id);
```

<br>

_a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?_

_Resposta_: Acho mais inteligente e seguro usar string ao invés de número para representar ids, isso porque o uso de números limita a quantidade de repetições possíveis para o id, enquanto string (que permite usar qualquer caracter, incluindo números) aumenta essa possibilidade, o que torna o id mais seguro.
Por exemplo um id de 3 posições: se usarmos número teremos 100 possibilidades (de 0 a 999), enquanto se usarmos string teremos muitas mais, já que é possível misturar letras, numéros e demais caractéres.

<br>

_b. A partir de hoje, vamos tentar isolar, ao máximo, as nossas lógicas em classes. Uma das vantagens disso é, por exemplo, utilizar a hierarquia para fazer modificações simples. Dado isso, crie uma classe que possua um um método público para gerar um id._

_Resposta_: Verificar na pasta `exercicio-tarde/src/service` a classe `IdGenerator`

```ts
import { v4 } from "uuid";

export class IdGenerator {
  public generateId(): string {
    return v4();
  }
}
```

<br><br>

### Exercício 2

Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que consigamos fazer a autenticação dele.
Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:

```tsx
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

<br>

_a. Explique o código acima com as suas palavras._

_Resposta_: No código acima primeiro estabelecemos a conexão com nosso banco de dados. Em seguida, inserimos um usuário na tabela User.

<br>

_b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas._

_Resposta_:

```sql
CREATE TABLE User (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
)
```

<br>

_c. Pela mesma justificativa do exercício anterior, crie uma classe para ser responsável pela comunicação do usuário com a tabela de usuários. Ela deve possuir um método que cria o usuário no banco; além disso, as variáveis necessárias para realizar as queries devem ser atributos dessa classe_

_Resposta_: Verificar na pasta `exercicio-tarde/src/data` a classe `UserDatabase`

```ts
import knex from "knex";

export class UserDatabase {
  private connection() {
    return knex({
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

  private static TABLE_NAME: string = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection()
      .insert({
        id,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }
}
```

<br>

_d. Crie um usuário utilizando somente a classe que você criou_

_Resposta_:

```ts
const userDataBase = new UserDatabase();
userDataBase.createUser("abc", "teste@teste.com", "123456");
```

<br><br>

### Exercício 3

Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:

- os dados que serão salvos no token (no nosso caso, o id);
- a chave secreta usada pra criptografar o token;
- algumas configurações, como o tempo de expiração

Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:

```tsx
import * as jwt from "jsonwebtoken";

const expiresIn = "1min";
const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );
  return token;
};
```

<br>

_a. O que a linha `as string` faz? Por que precisamos usar ela ali?_

_Resposta_: Evita que nosso código quebre, pois sem o parâmetro ele fica confuso se receberá uma string ou undefined. Nesse caso estamos afirmando que irá receber uma string.

<br>

_b._ _Agora, crie a classe que será responsável pela autorização dos usuários com um método que gere o token. Além disso, crie uma interface a parte para representar o input desse método. Lembre-se de colocar todas as constantes em atributos da classe._

_Resposta_: Verificar na pasta `exercicio-tarde/src/service` a classe `Authenticator`

```ts
import * as jwt from "jsonwebtoken";

export class Authenticator {
  // private static EXPIRES_IN = "1min";

  private static getExpiresIn(): number {
    return Number(process.env.ACCESS_TOKEN_EXPIRES_IN);
  }

  public generateToken(id: string): string {
    const token = jwt.sign(
      {
        id,
      },
      process.env.JWT_KEY as string,
      {
        // expiresIn: Authenticator.EXPIRES_IN,
        expiresIn: Authenticator.getExpiresIn(),
      }
    );
    return token;
  }
}

interface AuthenticationData {
  id: string;
}
```

<br><br>

### Exercício 4

Pronto, com essas três classes preparadas podemos criar o nosso endpoint. As informações dele são:

- _Verbo/Método_: POST
- _Path_: `/signup`
- _Input:_ O body da requisição deve ser

  ```json
  {
    "email": "email do usuário",
    "password": "senha do usuário"
  }
  ```

- _Output_: O body da resposta deve ser

  ```json
  {
    "token": "token gerado pelo jwt"
  }
  ```

<br>

_a. Crie o endpoint que realize isso, com as classes que você implementou anteriormente_

_Resposta_:

```ts
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const userDataBase = new UserDatabase();
    await userDataBase.createUser(id, req.body.email, req.body.password);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(id);

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

_b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`_

_Resposta_:

```ts
const email = req.body.email;
if (email === "") {
  throw new Error("O campo email não pode ficar vazio");
}
if (!email.includes("@")) {
  throw new Error("Informe um email válido");
}
```

<br>

_c. Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais_

_Resposta_:

```ts
const password = req.body.password;
if (password.length < 6) {
  throw new Error("A senha deve ter no mínimo 6 caracteres");
}
```

<br><br>

### Exercício 5

Para o login, vamos precisar alterar somente a classe que se comunica com o banco. No login, vamos receber o email e a senha do usuário. Então, vamos precisar de um método que realize essa busca no banco de dados para gente.

_a. Altere a classe do seu banco de dados para que ele tenha um método que retorne as informações de um usuário a partir do email_

_Resposta_: Incluí em `UserDatabase`

```ts
export class UserDatabase {
  //...

  public async getUserById(id: string): Promise<any> {
    const result = await this.connection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }
}
```

<br>

_b. Teste a sua função_

_Resposta_:

```ts
async function test() {
  const userDataBase = new UserDatabase();
  console.log(await userDataBase.getUserByEmail("oi@teste.com"));
}
test();
```

<br><br>

### Exercício 6

Agora, vamos implementar o endpoint de login, com as seguintes especificações:

- _Verbo/Método_: POST
- _Path_: `/login`
- _Input:_ O body da requisição deve ser

  ```json
  {
    "email": "email do usuário",
    "password": "senha do usuário"
  }
  ```

- _Output_: O body da resposta deve ser

  ```json
  {
    "token": "token gerado pelo jwt"
  }
  ```

<br>

_a. Crie o endpoint que realize isso, com as classes que você implementou anteriormente_

_Resposta_:

```ts
app.post("/login", async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userDataBase = new UserDatabase();
    const user = await userDataBase.getUserByEmail(email);

    if (user.password !== password) {
      throw new Error("Senha incorreta");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(user.id);

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

<br>

_b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`_

_Resposta_:

```ts
const email = req.body.email;
if (email === "") {
  throw new Error("O campo email não pode ficar vazio");
}
if (!email.includes("@")) {
  throw new Error("Informe um email válido");
}
```

<br><br>

### Exercício 7

Ufa, agora temos toda a nossa base pronta para identificar o usuário. Antes de prosseguir, precisamos alterar a nossa classe que implementa o gerenciamento do token. Esse método deve receber o token e devolver as informações do usuário salvas nele. Veja o exemplo abaixo:

```tsx
const expiresIn = "1min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

_a. O que a linha `as any` faz? Por que precisamos usá-la ali?_

_Resposta_: Passamos `as any` para que ele aceite qualquer tipo de valor em payload, caso contrário ele não entenderá se estamos trazendo uma string ou um objeto e apresentará erro quando tentarmos acessar `payload.id`

<br>

_b. Altere a sua classe do JWT para que ela tenha um método que realize a mesma funcionalidade da função acima_

_Resposta_:

```ts
export class Authenticator {
  // ...

  public verify(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result;
  }
}
```

<br><br>

### Exercício 8

Agora, vamos criar um endpoint que retorne as informações do usuário logado. As especificações dele estão abaixo:

- _Verbo/Método_: GET
- _Path_: `/user/profile`
- _Input:_ Deve receber, nos headers, o token de autenticação:

  ```
  Authorization: token.do.usuario
  ```

- _Output_: O body da resposta deve ser

      ```json
      {
      	"id": "id do usuário",
      	"email": "email do usuário"
      }
      ```

  <br>

_a. Comece alterando a classe do banco de dados para que ela tenha um método que retorne o usuário a partir do id_

_Resposta_:

```ts
export class Authenticator {
  // ...
  public async getUserById(id: string): Promise<any> {
    const result = await this.connection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }
}
```

<br>

_b. Crie o endpoint com as especificações passadas_

_Resposta_:
```ts
app.get("/user/profile", async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const userAuthData = authenticator.verify(token)

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

## Desafios

Como podemos deixar os nossos endpoints de autenticação mais seguros? Amanhã, vamos ver como criptografar a senha. Agora, você vai tentar fazer isso sozinho.

Documentação da lib de criptografia que vamo usar: [bcryptjs](https://www.npmjs.com/package/bcryptjs)

<br>

Lembre-se do diagrama que vimos hoje em aula e altere os endpoints de _signup_ e _login_ para usarem a senha encriptada

**singup**

![signup](https://user-images.githubusercontent.com/45580434/81584237-e11f9480-9388-11ea-8033-79cd23b3a27d.png)

**login**

![login](https://user-images.githubusercontent.com/45580434/81584243-e250c180-9388-11ea-9cd6-ee890595b933.png)
