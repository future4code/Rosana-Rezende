# Future4 | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

<p align="center">
  <img  width='500' src='https://user-images.githubusercontent.com/45580434/74607837-f69f5e00-50ba-11ea-97e0-62fab855bcb6.png'>
</p>

## Projeto: Sistema de Cadastro de Usuários

[Site do projeto](http://sistema-de-cadastro-de-usuarios.surge.sh/)

![sistema-de-cadastro-de-usuarios](https://user-images.githubusercontent.com/45580434/75915647-b1f32100-5e35-11ea-808a-e2616102056e.gif)

**Desenvolvido por:** [Rosana Rezende](https://www.linkedin.com/in/rosanarezende/)
<br>

### Escopo do projeto
Construir um pequeno sistema de cadastro de usuários (frontend).
<br>

[Documentação da API](https://documenter.getpostman.com/view/4233568/SVtWw7Mt?version=latest)
<br><br>

#### Requisitos obrigatórios

O projeto é composto por duas telas, a saber:

1. Tela de cadastro do usuário

  - [x] Esta tela deve solicitar um email e um nome. Além disso, deve utilizar a requisição de criar o usuário da API. Tanto em erro como em sucesso, um `alert` deve ser mostrado ao usuário.


2. Tela de lista de usuários

  - [x] Esta tela deve mostrar uma lista dos usuários com somente seus nomes. 

  - [x] Cada item da lista deve possuir um botão de deletar que realize a requisição de *deletar* da API. Tanto em erro como em sucesso, um `alert` deve ser mostrado ao usuário.

  - [x] Crie outro botão: "voltar". Ao clicar nele, o usuário deve ser redirecionado para a tela inicial (de cadastro)

<br><br>
#### Desafios

1. Veja abaixo
    - [x] Vamos modificar um pouco a funcionalidade de deletar usuários. Ao clicar no botão, deve aparecer um `alert` com a pergunta: "Tem certeza de que deseja deletar?". Somente se a resposta desta pergunta for positiva, o usuário deve ser deletado.


2. Adicione mais uma tela ao nosso projeto: detalhe do usuário.

  - [x] Ao clicar em algum item da lista de usuários, esta tela deve ser aberta e mostrar o nome e o email do usuário em questão.
  - [x] Deve haver um botão de deletar, cuja funcionalidade deve ser a mesma do botão da tela da lista
  - [x] A tela deve possuir um botão de 'voltar'. Ao clicar nele, o usuário deve ser redirecionado para a tela da lista de usuários.


3. Crie outro botão na tela de detalhe do usuário.
  - [x] Este é o botão de edição. Ao clicar nele, faça com que apareçam `<input/>` que permitam que sejam colocados novos nome e email para o usuário em questão. O botão de 'editar' deve sumir.
  - [x] Nesta situação, mostre outro botão: 'salvar'. Ao clicar nele, faça com que a edição dos dados do usuário seja feito a partir da API.
  - [x] Após a conclusão da requisição. Mostre um `alert` com o resultado ao usuário. Faça com que o botão de 'salvar' desapareça; e o de 'editar' apareça novamente.


4. Vamos adicionar uma funcionalidade na tela da lista:
  - [x] Adicione um campo de `<input/>` no topo desta tela. Ele servirá para o realizar buscas na lista de usuários. Ao lado deste campo, adicione um botão de 'buscar'
  - [x] Ao clicar no botão, deve ser utilizado o endpoint de busca da API.
  - [x] Mostre o resultado na tela.

<br>


