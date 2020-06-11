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

_a. Implemente a função_

_Resposta_:

Em UserBusiness.ts

```ts
public async getUserById(id: string){
    const user = await this.userDatabase.getUserById(id)

    if(!user){
      throw new NotFoundError("User not found");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole()
    }
}
```

Em UserController.ts

```ts
public async getUserById(req: Request, res: Response){
    const { id } = req.params
    try{
      const user = UserController.UserBusiness.getUserById(id)
      res.status(200).send(user)
    } catch(err){
      res.status(400).send({
        message: err.message
    })
    }
}
```

Em UserRouter.ts

```ts
userRouter.get("/profile/:id", new UserController().getUserById);
```

<br><br>

### Exercício 2

Vamos criar dois testes (unitários) para essa função `getUserById`:

_a. Erro de usuário não existente. Você deve verificar se:_

- _O código de erro está correto_
- _Se a mensagem está correta_

_Resposta_:

```ts
test("Should return throw new error 'User not found' when id is invalid ", async () => {
  expect.assertions(2);

  const getUserById = jest.fn((id: string) => {});
  userDatabase = { getUserById };

  userBusiness = new UserBusiness(
    userDatabase as any,
    hashGenerator as any,
    tokenGenerator as any,
    idGenerator as any
  );

  try {
    await userBusiness.getUserById("12345");
  } catch (err) {
    expect(err.errorCode).toBe(404);
    expect(err.message).toBe("User not found");
  }
});
```

<br>

_b. Resposta de sucesso. Você deve verificar se:_

- _Todas as funções mockadas foram chamadas (com os inputs corretos)_
- _A resposta de sucesso em si_

_Resposta_:

```ts
test("Should return a user when no error occurs", async () => {
  const getUserById = jest.fn(
    (id: string) =>
      new User(
        "001",
        "Teste",
        "teste@teste.com",
        "123456",
        stringToUserRole("NORMAL")
      )
  );
  userDatabase = { getUserById };

  userBusiness = new UserBusiness(
    userDatabase as any,
    hashGenerator as any,
    tokenGenerator as any,
    idGenerator as any
  );

  const user = await userBusiness.getUserById("001");

  expect(getUserById).toHaveBeenCalledWith("001");
  expect(user).toEqual({
    id: "001",
    name: "Teste",
    email: "teste@teste.com",
    role: UserRole.NORMAL,
  });
});
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
[
  {
    "id": "35b62ff4-64af-4721-a4c5-d038c6f730cf",
    "name": "Astrodev",
    "email": "astrodev@gmail.com",
    "role": "ADMIN"
  }
]
```

_a. Implemente a função_

_Resposta_:

Em errors, criei o arquivo UnauthorizedError.ts

```ts
import { BaseError } from "./BaseError/BaseError";

export class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(message, 401);
  }
}
```

Em UserBusiness.ts

```ts
public async getAllUsers(token: string){
    const userData = this.tokenGenerator.verify(token)

    if(stringToUserRole(userData.role) !== UserRole.ADMIN){
      throw new UnauthorizedError("You must be an admin to access this endpoint")
    }

    const users = await this.userDatabase.getAllUsers()

    return users.map(user => ({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole()
    }))
}
```

Em UserController.ts

```ts
public async getAllUsers(req: Request, res: Response){
    const token = req.headers.authorization as string
    try{
      const users = UserController.UserBusiness.getAllUsers(token)
      res.status(200).send(users)
    } catch(err){
      res.status(400).send({
        message: err.message
    })
    }
}
```

Em UserRouter.ts

```ts
userRouter.get("/all", new UserController().getAllUsers);
```

<br><br>

### Exercício 4

Vamos criar dois testes (unitários) para essa função `getAllUsers`:

_a. Erro de não autorizado. Você deve verificar se:_

- _O código de erro está correto_
- _Se a mensagem está correta_

_Resposta_:

```ts
describe("Testing UserBusiness.getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  let userBusiness = new UserBusiness(
    userDatabase as any,
    hashGenerator as any,
    tokenGenerator as any,
    idGenerator as any
  );

  test("Should return throw new error 'You must be an admin to access this endpoint' when role is not 'ADMIN'.", async () => {
    expect.assertions(2);

    const verify = jest.fn((token: string) => ({
      id: "001",
      role: "NORMAL",
    }));
    tokenGenerator = { verify };

    userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    try {
      await userBusiness.getAllUsers("token");
    } catch (err) {
      expect(err.errorCode).toBe(401);
      expect(err.message).toBe("You must be an admin to access this endpoint");
    }
  });
});
```

<br>

_b. Resposta de sucesso. Você deve verificar se:_

- _Todas as funções mockadas foram chamadas_
- _A resposta de sucesso em si_

_Resposta_:

```ts
test("Should return a user when no error occurs", async () => {
  const getAllUsers = jest.fn((token: string) => [
    new User(
      "002",
      "Teste 2",
      "teste2@teste.com",
      "123456",
      stringToUserRole("ADMIN")
    ),
  ]);
  userDatabase = { getAllUsers };

  const verify = jest.fn((token: string) => ({
    id: "002",
    role: "ADMIN",
  }));
  tokenGenerator = { verify };

  userBusiness = new UserBusiness(
    userDatabase as any,
    hashGenerator as any,
    tokenGenerator as any,
    idGenerator as any
  );

  const users = await userBusiness.getAllUsers("token");

  expect(getAllUsers).toHaveBeenCalledTimes(1);
  expect(users).toContainEqual({
    id: "002",
    name: "Teste 2",
    email: "teste2@teste.com",
    role: UserRole.ADMIN,
  });
});
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

_a. Implemente a função_

_Resposta_:

Em UserBusiness.ts

```ts
public async getProfile(token: string){
    const userData = this.tokenGenerator.verify(token)

    const user = await this.userDatabase.getUserById(userData.id);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole()
    }
}
```

Em UserController.ts

```ts
public async getProfile(req: Request, res: Response) {
    const token = req.headers.authorization as string
    try {
      const user = UserController.UserBusiness.getProfile(token)
      res.status(200).send(user)
    } catch (err) {
      res.status(400).send({
        message: err.message
      })
    }
}
```

Em UserRouter.ts

```ts
userRouter.get("/profile", new UserController().getProfile);
```

<br><br>

### Exercício 6

Agora, escreva ao menos 2 testes para essa função. Pense no que é mais importante de se testar!

_Resposta_:

```ts
describe("Testing UserBusiness.getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  let userBusiness = new UserBusiness(
    userDatabase as any,
    hashGenerator as any,
    tokenGenerator as any,
    idGenerator as any
  );

  test("Should return throw new error 'User not found' when user is invalid.", async () => {
    expect.assertions(4);

    const verify = jest.fn((token: string) => ({
      id: "003",
      role: "NORMAL",
    }));
    tokenGenerator = { verify };

    const getUserById = jest.fn((id: string) => undefined);
    userDatabase = { getUserById };

    userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    try {
      await userBusiness.getProfile("token");
    } catch (err) {
      expect(err.errorCode).toBe(404);
      expect(err.message).toBe("User not found");

      expect(verify).toHaveBeenCalledWith("token");
      expect(getUserById).toHaveBeenCalledWith("003");
    }
  });

  test("Should return a user when no error occurs", async () => {
    const verify = jest.fn((token: string) => ({
      id: "002",
      role: "ADMIN",
    }));
    tokenGenerator = { verify };

    const getUserById = jest.fn(
      (id: string) =>
        new User(
          "002",
          "Teste 2",
          "teste2@teste.com",
          "123456",
          stringToUserRole("ADMIN")
        )
    );
    userDatabase = { getUserById };

    userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const user = await userBusiness.getProfile("token");

    expect(verify).toHaveBeenCalledWith("token");
    expect(getUserById).toHaveBeenCalledTimes(1);
    expect(getUserById).toHaveBeenCalledWith("002");
    expect(user).toEqual({
      id: "002",
      name: "Teste 2",
      email: "teste2@teste.com",
      role: UserRole.ADMIN,
    });
  });
  
});
```

<br><br>

### DESAFIO

Existe uma outra forma para criar os mocks de classes/interfaces. Ele é mais **elegante**, mas também é mais **confuso**. Leia o artigo abaixo (que explica sobre isso) e refaça os testes que você criou hoje

[ES6 Class Mocks · Jest](https://jestjs.io/docs/en/es6-class-mocks)

_Resposta_:

```ts
```
