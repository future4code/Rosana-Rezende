# Labenu | Full-Stack Web Development Bootcamp

Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 53 - Relações em SQL | SISTEMA DE CINEMA

Durante essa semana iremos construir, nos exercícios de tarde, um pequeno _sistema de um cinema_. Ele deverá ter informações sobre atores, filmes, ingressos, e mais.

Faça os exercícios abaixo em ordem.

<br>

### Exercício 1

No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 

As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela

```sql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

*a. Explique o que é uma chave estrangeira*

_Resposta_:

```ts

```

<br>

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*

_Resposta_:

```ts

```

<br>

*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*

_Resposta_:

```ts

```

<br>

*d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

_Resposta_:

```ts

```

<br>

*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*

_Resposta_:

```ts

```

<br><br>

### Exercício 2

Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

```sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

*a. Explique, com as suas palavras, essa tabela*

_Resposta_:

```ts

```

<br>

*b. Crie, ao menos, 6 relações nessa tabela* 

_Resposta_:

```ts

```

<br>

*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

_Resposta_:

```ts

```

<br>

*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*

_Resposta_:

```ts

```

<br><br>

### Exercício 3

Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`. 

Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim: 

```sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

*a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*

_Resposta_:

```ts

```

<br>

*b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*

_Resposta_:

```ts

```

<br><br>

### Exercício 4

Existem outros dois operadores do tipo `JOIN`: `LEFT JOIN` e `RIGHT JOIN`. O primeiro retorna **todas as ocorrências** da **primeira** tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna **todas as ocorrências** da **segunda** tabela (à direita) e, então, procura todas as correspondências na outra tabela.

*a. Escreva uma query que retorne todos os filmes e suas avaliações (caso existam). A sua query deve retornar somente o nome, id, nota do filme e comentário*

_Resposta_:

```ts

```

<br>

*b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*

_Resposta_:

```ts

```

<br>

*c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*

_Resposta_:

```ts

```

<br><br>

### Exercício 5

Agora, para finalizar, vamos ver uma query com a nossa relação **M:N**. Nela, nós temos 3 tabelas envolvidas: `Movie`, `Actor` e `MovieCast`. Já vimos que conseguimos juntar informações de duas tabelas na mesma query, certo? Agora, vamos tentar unir as informações das três tabelas de uma vez só.

Para isso, só precisamos usar o operador JOIN duas vezes, mas em uma ordem que faça sentido. Primeiro, unimos **uma** das tabelas independentes (`Movie` e `Actor`) com a tabela de junção `MovieCast`, e, só então, unimos com a outra tabela independente. Veja essa query abaixo:

```sql
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

*a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?*

_Resposta_:

```ts

```

<br>

*b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query*

_Resposta_:

```ts

```

<br>

*c. A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*

    ```sql
    SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
    ```

_Resposta_:

```ts

```

<br>

*d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*

_Resposta_:

```ts

```

<br><br>


### Exercício 6

Para finalizar esse exercício, você vai ter que implementar, a sós, uma nova relação no nosso sistema: os Óscar dos filmes. Armazene o nome do óscar (`Óscar de melhor filme`,  `Óscar de melhor direção`, etc) e a data em que o filme o ganhou. Lembre-se que, nesse caso, estamos só considerando o óscar para os filmes.

*a. Que tipo de relação é essa?*

_Resposta_:

```ts

```

<br>

*b. Explicite a query que você usou para criar a tabela*

_Resposta_:

```ts

```

<br>

*c. Crie ao menos 2 óscar para cada um dos filmes* 

_Resposta_:

```ts

```

<br>

*d. Faça uma query que retorne todos os filmes e seus respectivos óscar*

_Resposta_:

```ts

```

<br><br>