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



### Exercício 3

Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`

```sql
DELETE FROM Actor WHERE name = "Tony Ramos"
```

*a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*

_Resposta_:
```sql
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";
```

<br>

*b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

_Resposta_:
```sql
DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;
```

<br><br>


### Exercício 4

O MySQL permite que façamos queries cujo resultado final é alguma manipulação em relação aos dados salvos. Essa manipulação é dada através de uma **função MySQL**. O exemplo mais clássico é a função COUNT, que permite contar a quantidade de elementos. Por exemplo, se quisermos contar todos os atores, poderíamos fazer assim:

```sql
SELECT COUNT(*) FROM Actor
```

Ou, então, poderíamos ver a quantidade de atrizes no nosso banco, colocando uma condição para entrar na contagem:

```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

Para encerrar os nossos exemplos, vamos falar da função AVG ("Average" - média em inglês) que permite calcular a média de alguma das colunas dos nossos dados. Por exemplo, a query abaixo devolve a média dos salários dos atores

```sql
SELECT AVG(salary) FROM Actor
```

Existem outras funções, tais como: `MAX` e `MIN` que permitem determinar os valores máximos e mínimos de uma coluna.

*a. Escreva uma query que pegue o maior salário de todos os atores e atrizes*

_Resposta_:
```sql
SELECT MAX(salary) FROM Actor
```

<br>

*b. Escreva uma query que pegue o menor salário das atrizes*

_Resposta_:
```sql
SELECT MIN(salary) 
FROM Actor
WHERE gender = "female";
```

<br>

*c. Escreva uma query que pegue a quantidade de atrizes*

_Resposta_:
```sql
SELECT COUNT(*) 
FROM Actor 
WHERE gender = "female";
```

<br>

*d. Escreva uma query que pegue a soma de todos os salários*

_Resposta_:
```sql
SELECT SUM(salary) 
FROM Actor;
```

<br><br>



### Exercício 5

Para finalizar o que vimos na aula, temos que treinar as operações indicadas por `LIMIT`, `ORDER BY` e `GROUP BY`

O `LIMIT`, como o próprio nome sugere, limita a quantidade de dados retornados. Se quisermos somente 3 atores da tabela:

```sql
SELECT * FROM Actor LIMIT 3
```

`ORDER BY` permite que ordenemos os dados dependendo de alguma coluna da tabela. Podemos dizer se queremos na ordem crescente (`ASC`) ou decrescente (`DESC`). A sintaxe é: `ORDER BY coluna ASC/DESC`. Se quisermos os atores em ordem alfabética:

```sql
SELECT * FROM Actor ORDER BY name ASC
```

Podemos juntar com o `LIMIT` e pegarmos os 4 primeiros atores (em ordem alfabética):

```sql
SELECT * FROM Actor ORDER BY name ASC LIMIT 4
```

Até pegar somente as 4 primeiras atrizes em ordem alfabética:

```sql
SELECT * FROM Actor
ORDER BY name ASC
LIMIT 4
WHERE gender = 'female'
```

O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela: `GROUP BY`. Ele normalmente é usado junto com algumas das funções que já vimos: `AVG`, `COUNT`, `SUM`, etc. A query abaixo retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao `gender`)

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

*a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*

_Resposta_: A query agrupou as pessoas por gênero e contou quantos tinha em cada um.

<br>

*b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

_Resposta_:
```sql
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

<br>

*c. Faça uma query que retorne todos os atores ordenados pelo salário*

_Resposta_:
```sql
SELECT *
FROM Actor
ORDER BY salary ASC; -- posso omitir o ASC
```

<br>

*d. Faça uma query que retorne os atores com os três maiores salarios*

_Resposta_:
```sql
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

<br>

*e. Faça uma query que retorne a média de salário por gênero*

_Resposta_:
```sql
SELECT gender, AVG(salary) as "Média de salário"
FROM Actor
GROUP BY gender;
```

<br><br>



### Exercício 6

Você já pegou o padrão né? Primeiro fazemos algo guiado e depois deixamos você fazer a sós!

**OBS:** como eu não tinha essa tabela, criei e adicionei alguns filmes.

```sql
CREATE TABLE Movie ( 
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL UNIQUE, 
    synopsis TEXT NOT NULL, 
    release_Date DATE NOT NULL, 
    rating INT NOT NULL 
);

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES
	(1, "Harry Potter e a Pedra Filosofal", "xururu", "2001-01-01", 9),
    (2, "Harry Potter e a Câmara Secreta", "xururu", "2002-01-01", 10),
    (3, "Harry Potter e o Prisioneiro de Azkaban", "xururu", "2004-01-01", 8);
```

*a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 

_Resposta_:
```sql
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

<br>

*b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

_Resposta_:
```sql
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```

<br>

*c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

_Resposta_:
```sql
UPDATE Movie
SET playing_limit_date = "2020-05-30"
WHERE id = 1;

UPDATE Movie
SET playing_limit_date = "2003-01-01"
WHERE id = 2;
```

<br>

*d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

_Resposta_:
```sql
DELETE FROM Movie
WHERE id = 3;
```

Depois de deletar, se tento alterá-lo, dá a seguinte mensagem: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não é possível alterar algo que não existe.

<br><br>



### Exercício 7

Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo:

*a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*

_Resposta_: 2

```sql
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5;
```

<br>

*b. Qual a média das avaliações dos filmes?*

_Resposta_: 9.5

```sql
SELECT AVG(rating)
FROM Movie;
```

<br>

*c. Qual a quantidade de filmes em cartaz?*

_Resposta_: 1

```sql
SELECT COUNT(*)
FROM Movie
WHERE playing_limit_date > CURDATE();
```

<br>

*d. Qual a quantidade de filmes que ainda irão lançar?*

_Resposta_: 0

```sql
SELECT COUNT(*)
FROM Movie
WHERE release_Date < CURDATE();
```

<br>

*e. Qual a maior nota dos filmes?*

_Resposta_: 10

```sql
SELECT rating
FROM Movie
ORDER BY rating DESC
LIMIT 1;
```

ou

```sql
SELECT MAX(rating) 
FROM Movie;
```

<br>

*f. Qual a menor nota dos filmes?*

_Resposta_: 9

```sql
SELECT rating
FROM Movie
ORDER BY rating
LIMIT 1;
```

ou

```sql
SELECT MIN(rating) 
FROM Movie;
```

<br><br>



### Exercício 8

Escreva **uma** query que:

*a. Retorne todos os filmes em ordem alfabética*

_Resposta_: 
```sql
SELECT *
FROM Movie
ORDER BY title;
```

<br>

*b. Retorne os 5 primerios filmes em ordem descrente alfabética* 

_Resposta_: 
```sql
SELECT *
FROM Movie
ORDER BY title DESC
LIMIT 5;
```

<br>

*c. Retorne os 3 filmes mais recentes em cartaz*

_Resposta_: 
```sql
SELECT *
FROM Movie
WHERE release_date < CURDATE() 
ORDER BY release_date DESC
LIMIT 3;
```

<br>

*d. Retorne os 3 filmes melhor avalidos*

_Resposta_: 
```sql
SELECT *
FROM Movie
ORDER BY rating DESC
LIMIT 3;
```

<br>