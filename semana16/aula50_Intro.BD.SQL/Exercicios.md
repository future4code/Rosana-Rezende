# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 50 - Introdução a Banco de Dados e SQL



### Exercício 1

Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo (que possui as opções `female` e `male`)

```sql
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

<br>

*a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

Os comando são:
* __VARCHAR(X)__: pode criar uma string com até X caracteres
* __PRIMARY KEY__: identificador único do item
* __NOT NULL__: não aceita valor nulo
* __DATE__: representa uma data no formato _YYYY-MM-DD_

<br>

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

O comando `SHOW DATABASES` trouxe as informações dos bancos de dados existentes, no meu caso: *information_schema* e *sagan_rosana_db*

O comando `SHOW TABLES` trouxe as tabelas existentes: Actor e PROFESSORES_LABENU.

<br>

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `SHOW Actor` e explique os resultados.*

O comando `SHOW Actor` gerou erro: <span style="color:red">Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Actor' at line 1</span>

Já o comando `DESCRIBE Actor` tras as informações referentes a tabela Actors (campo, tipo, se aceita nulo, se é chave primária, etc.)

<br><br>

### Exercício 2

O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

```sql
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

Atente-se a 3 fatos nessa query:

1. A ordem dos valores (`VALUES`) é definida pela lista colocada depois do nome da tabela (`ACTOR`): `(id, name, salary, birth_date)`.
2. Os valores `VARCHAR` (strings) devem ser indicados com `"`
3. As datas seguem o padrão: `YYYY-MM-DD`

<br>

*a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

<br>

*b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

O erro gerado foi: <span style="color:red">Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'</span>
Significa que não é possível criar uma entrada com uma chave primária já existente no banco de dados.

<br>

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

*c.*

```sql
INSERT INTO Actor (id, name, salary)
VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);
```

O erro gerado foi: <span style="color:red">Error Code: 1136. Column count doesn't match value count at row 1</span>
Não é possível inserir dados se o número de valores não corresponde ao número de colunas informados nos parênteses

<br>

*d.*

```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
);
```

O erro gerado foi: <span style="color:red">Error Code: 1364. Field 'name' doesn't have a default value</span>
O campo nome não aceita um valor nulo.

<br>

*e.*

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

O erro gerado foi: <span style="color:red">Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1</span>
A data de nascimento deveria estar entre aspas.

<br><br>

### Exercício 3

Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador `SELECT`. Talvez a query mais famosa que existe é:

```sql
SELECT * FROM Actor
```

Ela faz com que se retornem todas as **colunas** (ou "informações") de todas as **linhas** (ou "entradas") da nossa tabela. 

Se quisermos limitar as **colunas**, devemos indicar assim logo após o operador `SELECT`. Abaixo, está uma query que retorna somente o `id`e o `salário`de todos os atores

```sql
SELECT id, salary from Actor 
```

Agora, se quisermos colocar uma condição para retornar as **linhas** (entradas), devemos usar o operador `WHERE` e colocar a nossa condição que pode usar alguns operadores (`=`, `!=`, `>`, etc). Abaixo, está uma query que retorna somente o id e o nome dos atores.

```sql
SELECT id, name from Actor WHERE gender = "male"
```

*a. Escreva uma query que retorne todas as informações das atrizes*

```sql
SELECT id, name from Actor 
WHERE gender = "female"
```

<br>

*b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

```sql
SELECT salary from Actor 
WHERE name = "Tony Ramos";
```

<br>

*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

```sql
SELECT * from Actor 
WHERE gender = "invalid";
```

<br>

*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

```sql
SELECT id, name, salary from Actor 
WHERE salary <= 500000;
```

<br>

*e. Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

```sql
SELECT id, nome from Actor WHERE id = "002"
```

O erro gerado foi: <span style="color:red">Error Code: 1054. Unknown column 'nome' in 'field list'</span>
Não existe a coluna nome.

Comando correto:
```sql
SELECT id, name from Actor WHERE id = "002"
```

<br><br>

### Exercício 4

Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

Para fazer a primeira parte, vamos usar o comparador `LIKE`, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: `LIKE "A%"` porque `%` indica uma string genérica. O operador "ou" é indicado por `OR`. Assim, a primeira condição é indicada por: `WHERE name LIKE "A%" OR name LIKE "J%"`. 

Já a segunda parte é simples: `salary > 300000`. O que pode confundir é o operador lógico "e" (`AND`). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

Assim como o `LIKE` existem os operadores: 

- `BETWEEN`: permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2`.
- `NOT`: que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE`, `NOT BETWEEN`

<br>

*a. Explique com as suas palavras a query acima*

A query acima primeiro pesquisa, no banco de dados de Atores, quais deles tem nome que começa com a letra A ou começa com a letra J, trazendo ambos resultados. Em seguida, filtra esse resultados para trazer apenas aqueles cujos salários sejam superiores a R$300.000.

<br>

*b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*

```sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

<br>

*c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 

```sql
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

<br>

*d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

```sql
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
```

<br><br>

### Exercício 5




<br><br>

### Exercício 6



<br><br>

### Exercício 7



