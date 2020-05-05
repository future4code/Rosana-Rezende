# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 51 - Aprofundamento SQL | SISTEMA DE CINEMA

Durante essa semana iremos construir, nos exercícios de tarde, um pequeno *sistema de um cinema*. Ele deverá ter informações sobre atores, filmes, ingressos, e mais. 

Faça os exercícios abaixo em ordem. 

<br>

### Exercício 1

O SQL é um banco relacional e permite realizar queires complexas mais rapidamente do que bancos não relacionais. Uma das coisas que permite isso é o fato das tabelas serem muito bem definidas e com regras bem rigidas. Só que, às vezes, a gente pode errar ao começar modelando uma tabela: confundir o tipo de alguma coluna; esquecer de representar alguma informação e outras coisas. É por isso que é possível **alterar** as regras definidas por uma tabela. 

O comando que faz isso é o `ALTER`. O comando abaixo adiciona uma coluna na tabela de Actors para representar o sabor de sorvete favorito da celebridade

```sql
ALTER TABLE Actors ADD favorite_ice_cream_flavor VARCHAR(255);
```

Às vezes, gostaríamos de garantir que todos os dados anteriores a essa alteração tenham algum valor como padrão. Por exemplo, pense que, a partir de agora, gostaríamos de usar a tabela de Atores para guardar os diretores também; e, então, vamos adicionar um tipo: "Director" ou "NotDirector". Como ainda não temos nenhum diretor nessa tabela, seria legal que **todos os atores já salvos no banco até então** tivessem a coluna `type` com o valor "NotDirector". Para isso, indicamos um valor padrão/default:

```sql
ALTER TABLE Actors ADD type VARCHAR(255) DEFAULT "NotDirector";
```

Leia os comandos abaixo e indique o que eles fazem. **Não** os rode nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

<br>

*a.*

```sql
ALTER TABLE Actors DROP COLUMN salary;
```

_Resposta_: Remove a coluna `salary` da tabela Actors

<br>

*b.*

```sql
ALTER TABLE Actors CHANGE gender sex VARCHAR(6);
```

_Resposta_: Altera o nome da coluna `gender` para `sex`

<br>

*c.* 

```sql
ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
```

_Resposta_: Altera o tipo da coluna `gender` para VARCHAR(255), mantendo o mesmo nome.

<br>

*d. Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*

_Resposta_:
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

<br><br>



### Exercício 2

Além de criar e ler as tabelas, é muito importante que entendamos também como atualizar e deletar. Inclusive, essas 4 operações têm um nome muito famoso que vocês com certeza irão ouvir no dia a dia do trabalho: CRUD. Quando falamos que vamos fazer um CRUD, queremos dizer que vamos fazer alguma aplicação que cria (Create), lê (Read), atualiza (Update) e deleta (Delete) algum tipo de informação.

No MySQL, existem mais dois operadores que nos permitiram fazer o CRUD de qualquer coisa. O primeiro deles é o `UPDATE`. A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:

```sql
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123"
```

*a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*

_Resposta_:
```sql
UPDATE Actor
SET 
    name = "Daniel Radcliffe",
    birth_date = "1989/07/23"
WHERE id = "003";
```

<br>

*b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PÃES`. Então, escreva outra query para voltar ao nome anterior.*

_Resposta_:
```sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

<br>

*c. Escreva uma query que atualize todas as informações do ator com o id `005`*

_Resposta_:
```sql
UPDATE Actor
SET 
	name = "Emma Watson",
	birth_date = "1990-04-15",
    salary = 15000000,
    gender = "female"
WHERE id = "005";
```

<br>

*d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

_Resposta_:
```sql
UPDATE Actor
SET name = "Testador"
WHERE id = "004"
```

Apareceu a seguinte mensagem: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Nada foi alterado na tabela, já que o id não existe.

<br><br>

