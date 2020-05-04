# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Aula 50 - Introdução a Banco de Dados e SQL



### Exercício 1

Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo (que possui as opções `female` e `male`)

```
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

<br>

a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

Os comando são:
* __VARCHAR(X)__: pode criar uma string com até X caracteres
* __PRIMARY KEY__: identificador único do item
* __NOT NULL__: não aceita valor nulo
* __DATE__: representa uma data no formato _YYYY-MM-DD_

<br>

b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

O comando `SHOW DATABASES` trouxe as informações dos bancos de dados existentes, no meu caso: *information_schema* e *sagan_rosana_db*

O comando `SHOW TABLES` trouxe as tabelas existentes: Actor e PROFESSORES_LABENU.

<br>

c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `SHOW Actor` e explique os resultados.*

O comando `SHOW Actor` gerou erro: Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Actor' at line 1

Já o comando `DESCRIBE Actor` tras as informações referentes a tabela Actors (campo, tipo, se aceita nulo, se é chave primária, etc.)

<br><br>

### Exercício 2



<br><br>

### Exercício 3



<br><br>

### Exercício 4



<br><br>

### Exercício 5




<br><br>

### Exercício 6



<br><br>

### Exercício 7



