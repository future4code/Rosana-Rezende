# Labenu | Full-Stack Web Development Bootcamp

Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 62 - Testes automatizados com Typescript

<br>

### Exercício 1

Para começar, você deve criar um programa que verifique se um usuário pode fazer uma compra ou não. Ela deve receber um objeto `user` (com nome e saldo) e um valor de compra. Caso o saldo seja maior ou igual ao valor de compra você deve retornar um novo usuário (com o mesmo nome e o saldo atualizado depois da compra). Caso contrário, retorne `undefined`

```tsx
function performPurchase(user: User, value: number): User | undefined 
```

<br>

*a. Crie uma interface para representar o usuário*

_Resposta_:

```ts
interface User {
    name: string,
    balance: number
}
```

<br>

*b. Implemente  a função*

_Resposta_:

```ts
function performPurchase(user: User, value: number): User | undefined {
    if(user.balance >= value){
        const newUser: User = {
            name: user.name,
            balance: user.balance - value
        }
        return newUser
    }
    return undefined
}
```

<br><br>

### Exercício 2

Agora vamos criar testes para essa função. Lembre-se de criar o arquivo com o padrão `<nome>.test.ts` na pasta  `tests`

<br>

*a. Faça um teste com um usuário com o saldo maior do que o valor de compra*

_Resposta_:

```ts
it("Should return new user if balance is greater than purchase price", () => {
        const user = {
            name: "Rosana",
            balance: 50
        }
        const value = 40
        const output = performPurchase(user, value)
        const newUser = {
            name: "Rosana",
            balance: 10
        }
        expect(output).toEqual(newUser)
})
```

<br>

*b. Faça um teste com um usuário com o saldo igual ao valor de compra*

_Resposta_:

```ts
it("Should return new user if balance is equal to purchase price", () => {
        const user = {
            name: "Rosana",
            balance: 50
        }
        const value = 50
        const output = performPurchase(user, value)
        const newUser = {
            name: "Rosana",
            balance: 0
        }
        expect(output).toEqual(newUser)
})
```

<br>

*c. Faça um teste com um usuário com o saldo menor do que o valor de compra*

_Resposta_:

```ts
it("Should return undefined if balance is less than purchase price", () => {
        const user = {
            name: "Rosana",
            balance: 50
        }
        const value = 60
        const output = performPurchase(user, value)
        expect(output).toBe(undefined)
})
```

<br><br>

### Exercício 3

Agora, vamos fazer uma função mais complexa. O contexto dela é o seguinte: fazer um sistema que identifique quais pessoas que estão em uma fila podem entrar em um cassino. A empresa que vai fazer isso quer ter filias nos EUA e no Brasil. Então, os `casino` devem possuir um nome e um lugar onde ficam (`EUA` ou `BRAZIL`).  Os usuários devem ser identificados pelo nome, pela nacionalidade (`AMERICAN` ou `BRAZILIAN`) e a idade. Se um usuário for entrar em um `casino` nos Estados Unidos, ele deve ter idade maior do que (idade igual a) 21 anos; se entrar em um no Brasil, ele deve ter idade maior do que (idade igual a) 18 anos.

O retorno da função deve separar os usuários em Brasileiros e Americanos e indicar os nomes dos que tem permissão de entrar e os nomes dos que não tem. Abaixo, estão as entradas da função, a saída e a assinatura dela:

**Entrada**

```tsx
enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

interface Casino {
  name: string;
  location: LOCATION;
}
```

**Saída**

```tsx
interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

interface ResultItem {
  allowed: string[];
  unallowed: string[];
}
```

**Assinatura**

```tsx
function verifyAge(casino: Casino, users: User[]): Result
```

*a. Leia os códigos fornecidos acima com calma. Veja se não ficou com nenhuma dúvida.*

_Resposta_: Tudo lido!

<br>

*b. Implemente a função*

_Resposta_:

```ts
function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for(const user of users){
        if(casino.location === LOCATION.EUA){
            if(user.age >= 21){
                allowed.push(user)
            }
            else {
                unallowed.push(user)
            }
            
        }
        else if(casino.location === LOCATION.BRAZIL){
            if(user.age >= 18){
                allowed.push(user)
            }
            else {
                unallowed.push(user)
            }
        }
    }

    const allowedBrasilians = allowed.filter(user => user.nacionality === NACIONALITY.BRAZILIAN)
    const unallowedBrasilians = unallowed.filter(user => user.nacionality === NACIONALITY.BRAZILIAN)
    const allowedAmericans = allowed.filter(user => user.nacionality === NACIONALITY.AMERICAN)
    const unallowedAmericans = unallowed.filter(user => user.nacionality === NACIONALITY.AMERICAN)

    const result: Result = {
        brazilians: {
            allowed: allowedBrasilians.map(user => user.name),
            unallowed: unallowedBrasilians.map(user => user.name)
        },
        americans: {
            allowed: allowedAmericans.map(user => user.name),
            unallowed: unallowedAmericans.map(user => user.name)
        }
    }

    return result
}
```

<br>

*c. O que foi mais difícil de fazer?*

_Resposta_: A parte mais difícil foi entender que o retorno final de usuários que tem ou não permissão para entrar nos cassinos era apenas do nome. Foi uma desatenção minha, pois está escrito no enunciado.

<br><br>

### Exercício 4

Vamos escrever os testes da função do exercício 3. 

*a. Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil*

_Resposta_:

```ts
it("should a brazilian user aged 18 or older enter a casino in Brazil", () => {
        const casino = {
            name: "Casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const users = [
            {
                name: "Rosana",
                age: 18,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]
        const output = verifyAge(casino, users)
        const result = {
            brazilians: {
                allowed: ["Rosana"],
                unallowed: []
            },
            americans: {
                allowed: [],
                unallowed: []
            }
        }
        expect(output).toEqual(result)
})
```

<br>

*b. Escreva um teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil*

_Resposta_:

```ts
it("should a american user aged 18 or older enter a casino in Brazil", () => {
        const casino = {
            name: "Casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const users = [
            {
                name: "Cleiton",
                age: 18,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        const result = {
            brazilians: {
                allowed: [],
                unallowed: []
            },
            americans: {
                allowed: ["Cleiton"],
                unallowed: []
            }
        }
        expect(output).toEqual(result)
})
```

<br>

*c. Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.*

_Resposta_:

```ts
it("should 2 american users and 2 brazilian users, aged 19, not be allowed to enter a casino in EUA", () => {
        const casino = {
            name: "Casino Americano",
            location: LOCATION.EUA
        }
        const users = [
            {
                name: "Rosana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Mariana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Cleiton",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Maurício",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        const result = {
            brazilians: {
                allowed: [],
                unallowed: ["Rosana", "Mariana"]
            },
            americans: {
                allowed: [],
                unallowed: ["Cleiton", "Maurício"]
            }
        }
        expect(output).toEqual(result)
})
```

<br>

*d. Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.*

_Resposta_:

```ts
it("should 2 american users, aged 21, enter a casino in EUA - and 2 brazilian users, aged 19, not be allowed to enter a casino in EUA", () => {
        const casino = {
            name: "Casino Americano",
            location: LOCATION.EUA
        }
        const users = [
            {
                name: "Rosana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Mariana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Cleiton",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Maurício",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        const result = {
            brazilians: {
                allowed: [],
                unallowed: ["Rosana", "Mariana"]
            },
            americans: {
                allowed: ["Cleiton", "Maurício"],
                unallowed: []
            }
        }
        expect(output).toEqual(result)
})
```

<br><br>

### Exercício 5

Vamos escrever alguns testes mais complexos.

*a. Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil. Verifique que o **tamanho do array allowed** da propriedade **brasilians** tenha tamanho menor do que 2 e maior do que 0.*

_Resposta_:

```ts
it("should a brazilian user aged 18 or older enter a casino in Brazil", () => {
        const casino = {
            name: "Casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const users = [
            {
                name: "Rosana",
                age: 18,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]
        const output = verifyAge(casino, users)
        expect(output.brazilians.allowed.length).toBeLessThan(2)
        expect(output.brazilians.allowed.length).toBeGreaterThan(0)
})
```

<br>

*b. Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil.  Verifique que o **tamanho do array unallowed** da propriedade **americans** tenha tamanho igual a 0.*

_Resposta_:

```ts
it("should a american user aged 18 or older enter a casino in Brazil - array length", () => {
        const casino = {
            name: "Casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const users = [
            {
                name: "Cleiton",
                age: 18,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        expect(output.americans.unallowed.length).toEqual(0)
})
```

<br>

*c. Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Verifique que os arrays **unallowed** possuam o nome de algum dos usuários que você criou*

_Resposta_:

```ts
it("should a american user aged 18 or older enter a casino in Brazil - array length", () => {
        const casino = {
            name: "Casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const users = [
            {
                name: "Cleiton",
                age: 18,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        expect(output.americans.unallowed.length).toEqual(0)
    })

    it("should 2 american users and 2 brazilian users, aged 19, not be allowed to enter a casino in EUA", () => {
        const casino = {
            name: "Casino Americano",
            location: LOCATION.EUA
        }
        const users = [
            {
                name: "Rosana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Mariana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Cleiton",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Maurício",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        expect(output.brazilians.unallowed).toContain("Rosana")
        expect(output.americans.unallowed).toContain("Cleiton")
})
```

<br>

*d. Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o **tamanho do array unallowed** da propriedade **brasilians** tenha tamanho maior do que 1. Verifique que o **tamanho do array unallowed** da propriedade **americans** tenha tamanho menor do que 1. Verifique que o **tamanho do array allowed** da propriedade **ame** tenha tamanho igual a 2.*

_Resposta_:

```ts
it("should 2 american users, aged 21, enter a casino in EUA - and 2 brazilian users, aged 19, not be allowed to enter a casino in EUA", () => {
        const casino = {
            name: "Casino Americano",
            location: LOCATION.EUA
        }
        const users = [
            {
                name: "Rosana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Mariana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Cleiton",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Maurício",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ]
        const output = verifyAge(casino, users)
        expect(output.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(output.americans.unallowed.length).toBeLessThan(1)
        expect(output.americans.allowed.length).toBe(2)     
})
```

<br><br>

### Exercício 6

Para treinar os testes das funções assíncronas, vamos pedir para que você pegue a classe que cria um post do projeto LaBook da semana passada.

Lembre-se de pegar as variáveis de ambiente, instalar e configurar o `dotenv`

*a. Comece escrevendo um teste que crie um post no banco de dados e verifique se ele foi criado (fazendo uma query pelo id)*

_Resposta_:

```ts
it("Should insert an post into post table", async () => {
        const post = new Post(
            "001", 
            "image 1", 
            "description 1", 
            new Date(2020, 6, 1), 
            "normal", 
            "4ea0b7c0-3a2e-4f9d-8bdd-a6d8f11e7332"
        )
        await postDatabase.createPost(post)
        
        const post1 = await postDatabase.getPostById(post.getId()) // ou "001"
        const post1Output = {
            id: "001",
            image: "image 1", 
            description: "description 1", 
            creation_date: new Date(2020, 6, 1), 
            type: "normal", 
            user_id: "4ea0b7c0-3a2e-4f9d-8bdd-a6d8f11e7332"
        }

        expect(post1).not.toBe(undefined)
        expect(post1).toEqual(post1Output)
})
```

<br>

*b. Faça a configuração do `afterAll`. O que precisamos fazer quando os testes acabam?*

_Resposta_:

```ts
afterAll(async () => {
        await postDatabase.deletePost("001")
        await BaseDatabase.destroyConnection()
})
```

<br><br>

### Exercício 7

Agora, vamos fazer um teste que force um erro no nosso banco de dados. Para isso, vamos começar criando um post no banco com um id. Depois vamos tentar criar o mesmo post com o mesmo id (para que dê um erro de "chave duplicada ").

Lembre-se de que colocamos o código em um `try/catch` e fazemos as validações dentro do `catch`. 

*a. Implemente esse teste.*

_Resposta_:

```ts
it("Should throw an error when post is duplicated", async () => {
        expect.assertions(3);
        try {
            const post = new Post(
                "002", 
                "image 2", 
                "description 2", 
                new Date(2020, 6, 1), 
                "normal", 
                "4ea0b7c0-3a2e-4f9d-8bdd-a6d8f11e7332"
            )
            await postDatabase.createPost(post)
            await postDatabase.createPost(post)
        } catch (err) {
            expect(err).not.toBe(undefined);
            expect(err.code).toBe("ER_DUP_ENTRY");
            expect(err.errno).toBe(1062);
        }
});
```

<br><br>

### Exercício 8 (DESAFIO)

Faça os testes necessários para verificar que as queries do Feed estão funcionando. 

Para isso, você vai precisar verificar:

- A situação em que um usuário não segue nenhum outro;
- A situação em que um usuário só segue outro usuário;
- A situação em que um usuário segue mais de um usuário

_Resposta_:

```tsc
```

<br><br>

### Exercício 9 (DESAFIO)

Convidamos você a implementar o seu primeiro teste *E2E.* Para isso, vamos testar as funcionalidades de cadastro e login. 
Te damos duas dicas:

1. Você vai precisar realizar o teste desde o início dos controllers, passando pela camada de business e efetivamente criando o usuário no banco e verificando as senhas salvas lá

2. Pense com calma quais erros são importantes de você testar. Não escreva código desnecessário

_Resposta_:

```tsc
```
