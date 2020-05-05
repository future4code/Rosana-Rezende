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

_Resposta_: Remove a coluna salary da tabela Actors

<br>

*b.*

```sql
ALTER TABLE Actors CHANGE gender sex VARCHAR(6);
```

_Resposta_: x

<br>

*c.* 

```sql
ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
```

_Resposta_: x

<br>

*d. Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*

_Resposta_: x

<br>