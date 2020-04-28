# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Projeto: POC - Sistema Bancário - Refatoração com classes

### Escopo do projeto
Utilizando como base o projeto [POC - Sistema Bancário](), refatorar a aplicação utilizando Orientação a Objetos.

<br>

#### Requisitos

Implementar, no mínimo, as classes presentes na imagem a seguir:

<p align="center">
  <img  width='400' src='https://user-images.githubusercontent.com/45580434/80393360-c4626780-8886-11ea-85f3-7f6869b612af.png'>
</p>

As funcionalidades são as mesmas 3 iniciais de sexta feira. Segue uma lembrança:

1. Criar conta 🌚

    Um cliente pode criar uma conta no banco se tiver idade maior do que 18 anos. Ele deve informar: nome, CPF e data de nascimento. As contas devem guardar essas informações e uma propriedade para representar o saldo do usuário. Além disso devem persistir todos os gastos do usuário num array de extrato (possuindo o valor, a data e uma descrição). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado.



2. Ver saldo

    O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF. 



3. Adicionar saldo

    O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar. Quando ele fizer isso, um item deve ser adicionado ao extrato.

Todas as operações devem ser salvas no arquivo JSON. É permitido utilizar a classe `JSONFileManager` feita em aula e quaisquer códigos criados sexta-feira por você.

Deixe a terceira funcionalidade, bem como a classe `Transaction`, por último. Crie uma funcionalidade por vez, checando no JSON se está funcionando.

<br>

#### Desafio

Crie uma classe que abstraia a leitura de argumentos do script, tornando essa tarefa mais simples. Seja criativ@ e se estiver com dificuldade abra um atendimento.