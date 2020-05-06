# Labenu | Full-Stack Web Development Bootcamp

Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 51 - Aprofundamento SQL | SISTEMA DE CINEMA

Durante essa semana iremos construir, nos exercícios de tarde, um pequeno _sistema de um cinema_. Ele deverá ter informações sobre atores, filmes, ingressos, e mais.

Faça os exercícios abaixo em ordem.

<br>

### Exercício 1

Vamos começar vendo um pouco do knex. Depois de toda a configuração, podemos usar a variável `connection` para fazer _queries_ no banco.

Abaixo, estamos pegando o Actor com o id `001`

```tsx
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0][0];
};
```

Perceba algumas coisas importantes nesse código: o uso da template string para acessar a variável que a função recebe; o jeito com que o valor é retornado: `result[0][0]`. Isso acontece porque uma _query_ feita com o `raw` devolve exatamente o que o banco MySQL devolveu.

Utilize os _raws_ para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

_a. Explique como é a resposta que temos quando usamos o `raw`._

_Resposta_: O raw traz como resposta um array com vários arrays dentro.
O primeiro array é o RowDataPacket, que nos interessa, por isso usamos `result[0]`, e para que a resposta venha apenas com o conteúdo/objeto, sem estar envolta em [], usamos `result[0][0]`

<br>

_b. Faça uma função que busque um ator pelo nome;_

_Resposta_:

```ts
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `);
  return result[0][0];
};
```

<br>

_c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`._

_Resposta_:

```ts
const countByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count
      FROM Actor 
      WHERE gender = "${gender}"
    `);
  return result[0][0].count;
};
```

<br><br>

### Exercício 2

Agora vamos treinar um pouco os _queries builders_. Eles são uma forma mais simples de fazer requisições que já tratam as respostas e as queries usando elementos diretamente do Javascript (objetos e arrays). Abaixo, há uma query que cria um ator:

```tsx
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};
```

Podemos mandar um objeto javascript diretamente que o knex vai criar a query para nós. Perceba só que temos sempre que colocar como **chaves** do objeto os nomes das **colunas** que estão nas tabelas (como fizemos com `birth_date`).

Existem várias funções que podemos encadear: `update()`, `delete()`, `set()`, `select()`, `from()`, `avg()`, `count()` e muito outras. Pesquise na internet se tiver dúvida em qual usar!

Utilize os _queries builders_ para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

_a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão_

_Resposta_:

```ts
const updateSalary = async (salary: number, id: string): Promise<void> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where({
      id: id,
    });
  console.log("Salário atualizado com sucesso");
};
```

<br>

_b. Uma função que receba um id e delete um ator da tabela_

_Resposta_:

```ts
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where({
    id: id,
  });
  console.log("Ator/atriz deletado com sucesso");
};
```

<br>

_c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`_

_Resposta_:

```ts
const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor").avg("salary as average").where({
    gender: gender,
  });
  return result[0].average;
};
```

<br><br>

### Exercício 3

Está na hora de começar a criar alguns endpoints. O mais simples de todos talvez seja o de pegar o ator pelo `id`. Queremos criar um método GET que receba como _path param_ o _id_ do ator cujas informações queremos pegar. Para isso, devemos:

- Usar a função `get` do express
- Definir o _path param_ com a **chave id: `/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`

```tsx
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

_a. Por que o id está sendo lido assim: `req.params.id`?_

_Resposta_: Porque a requisição (req) traz várias possibilidades, dentre elas acessar os params, e nesse caso escolhemos especificamente o parâmetro id.

<br>

_b. O que as últimas linhas do try (`res.status(200).send(actor)`) e do cathc (`res.status(400).send({...}` ) fazem? Teste o código se precisar._

_Resposta_: `res.status(200).send(actor)` tem haver com o sucesso da requisição: se tudo der certo, terá um status 200 e trará o ator solicitado.
`res.status(400).send({...}` tem haver com erro: caso a requisição falhe, aparecerá o status 400 e uma mensagem de erro correspondente.

<br>

_c. Crie um endpoint agora com as seguintes especificações:_

- Deve ser um GET (`/actor`)
- Receber o gênero como um _query param_ (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

_Resposta_:

```ts
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender;
    const count = await countByGender(gender as string); // lembrar desse detalhe
    res.status(200).send({
      quantity: count, // dei um nome pra não trazer um número simplesmente
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

<br><br>

### Exercício 4

Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:

- Definir o método como `PUT`
- Criar um path: `/actor`
- Receber os parâmetros pelo body

```tsx
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

Perceba que tivermos que criar uma nova data. Isso acontece porque o JSON só envia para gente um número, um booleano ou uma string. Assim, como a nossa função espera receber um `Date`, devemos criar uma nova instância dessa classe.

Crie um endpoint para cada uma das especificações abaixo:

_a._ - Deve ser um POST (`/actor`) - Receber o salário e o id pelo body - Simplesmente atualizar o salário do ator com id em questão

_Resposta_:

```ts
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.salary, req.body.id);
    res.status(200).send({
      message: "Sucess",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

<br>

_b._ - Deve ser um DELETE (`/actor/:id`) - Receber id do ator como _path param_ - Simplesmente deletar o ator da tabela

_Resposta_:

```ts
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteActor(id);
    res.status(200).send({
      message: "Sucess",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

<br><br>

### Exercício 5

Agora, você vai treinar novamente usando a tabela de Filmes. Só que vai ser bem mais direto agora. Vamos te passar o endpoint, com as especificações e você terá que implementá-lo por completo: a função do banco, a função do express, tudinho!

Especificações do Endpoint:

- Deve ser um POST (`/movie`)
- Receber todas as informações pelo body
- Criar o filme na tabela

_Resposta_:

```ts
const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  release_Date: Date,
  rating: number,
  playing_limit_date: Date
): Promise<void> => {
  await connection
    .insert({
      id,
      title,
      synopsis,
      release_Date,
      rating,
      playing_limit_date,
    })
    .into("Movie");
  console.log("Filme adicionado com sucesso");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      new Date(req.body.release_Date),
      req.body.rating,
      new Date(req.body.playing_limit_date)
    );
    res.status(200).send({
      message: "Sucess",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

<br><br>

### Exercício 6

Especificações do Endpoint:

- Deve ser um GET (`/movie/all`)
- Não recebe nada
- Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens

_Resposta_:

```ts
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie
    LIMIT 15
  `)
  return result[0]
}

app.get("/movie/all", async (req: Request, res: Response) => {
  try{
    const movies = await getAllMovies()
    res.status(200).send({
      movies: movies
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

Especificações do Endpoint:

- Deve ser um GET (`/movie/search`)
- Deve receber o termo de busca como uma query string (`/movie/search?query=`)
- Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento

_Resposta_:

```ts
const searchMovies = async(query: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie
    WHERE title LIKE "%${query}%" OR synopsis LIKE "%${query}%"
    ORDER BY release_Date;
  `)
  return result[0]
}

app.get("/movie/search", async(req: Request, res: Response) => {
  try{
    const query = req.query.query
    const movies = await searchMovies(query as string)
    res.status(200).send({
      movies: movies
    })
  } catch(err){
    res.status(400).send({
      message: err.message
    })
  }
})
```
