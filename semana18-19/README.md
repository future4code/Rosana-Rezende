# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

## Backend - Projeto: LaBook
Semana exclusiva de **PROJETO EM GRUPO**

[Repositório do projeto](https://github.com/future4code/labook-grupo-2)

**Desenvolvido por:**
* [Marina Isabel](https://github.com/marinaisabels)
* [Rosana Rezende](https://github.com/rosanarezende)
* [Thales Fernando Milanezi](https://github.com/ThalesMilanezi)
<br><br>

## Escopo

Essa semana, mais um Freela surgiu. Um jovem empreendedor teve uma ideia revolucionária que parece ter dado certo, mas está precisando de uma força para deixar o backend redondo. Ele já tem um time cuidando do Frontend, e você irá cuidar do backend - com bastante atenção à alta complexidade que a ideia que ele teve requer. O Astrodev, já famoso pela qualidade das entregas de seu time de programadores, foi contatado e repassou a tarefa a você. Segue o email enviado por ele:
<br>

```
Prezada(o),

	Essa semana será simples. É só fazer o backend de uma rede social.
O nome da rede se chama LaBook, nasceu como uma rede de alunos de 
universidades americanas, e agora parece que já tem um número aceitável 
de usuários (2 bilhões).
	Você deverá construir o backend da LaBook, garantindo que 
que todos os requisitos descritos em anexo sejam cumpridos. O
prazo é até sexta-feira.
	É um contrato importante para nós, portanto, sem atrasos ou erros.

Att., 

Astrodev
```

### Requisitos obrigatórios

O LaBook será uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal), comentá-los e curti-los também. O desenvolvedor do frontend ~~acha que~~ é bastante experiente; dessa forma, já preparou uma lista de todos os endpoints que serão necessários para o projeto:

- 1. Cadastrar

    Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha. Além disso, esse endpoint já tem que realizar o login do usuário, fornecendo seu token de autenticação no retorno da requisição.

- 2. Logar

    Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário.

- 3. Fazer amizade

    Criar uma amizade é simples: basta receber o token de autenticação junto com o Id do usuário com o qual se deseja fazer amizade. 

    Uma amizade é uma "relação mútua": quando um usuário vira amigo de outro, esse outro "já é amigo" desse primeiro usuário (ou seja, o segundo usuário não precisa virar amigo do outro depois)

    **Não há a necessidade de "aceitar" uma amizade.**

- 4. Desfazer Amizade

    Encerrar uma amizade segue o mesmo fluxo de fazer: com o token de autenticação e o id do usuário, já é possível realizar esse processo.

    Observação: você deve retornar um erro caso o usuário tente desfazer uma amizade com alguém com quem não tem essa amizade registrada no banco!

- 5. Criar post

    O post deve ser criado, passando-se as informações de: foto, descrição, data de criação e tipo ("normal" ou "evento").

- 6. Ver todo o Feed

    O feed é composto por todos os posts dos  amigos do usuário logado. Os posts devem ser retornado em ordem de criação: do mais recente ao mais antigo.

- 7. Ver apenas um tipo de post do Feed

    Esse endpoint deve receber um tipo ("normal" ou "evento") e retornar todos os posts que sejam do tipo especificado. Os posts devem ser retornado em ordem de criação: do mais recente ao mais antigo.

Por fim, ressaltam-se dois fatos:

- Você deve analisar e pensar quais são os endpoints que necessitam do token de autenticação
- Lembre-se de que o Backend deve ser muito conciso. Isso significa que você deve prever a maior parte dos erros que possam acontecer e já se precaver contra eles. (Não se preocupe muito com essa parte, mas, se der tempo, foque nisso!)

<br><br>

### Desafios

- 8. Curtir Post

    Essa requisição deve receber somente o id do post e retornar uma mensagem de sucesso ou erro. Lembre-se de que um usuário não pode curtir o mesmo post duas vezes.

- 9. Descurtir Post

    Essa requisição deve receber somente o id do post e retornar uma mensagem de sucesso ou erro. Lembre-se de que um usuário não pode descurtir um post que não tenha curtido

- 10. Comentar Post

    Recebendo o id do post e mensagem do comentário, o endpoint deve funcionar sem problemas. Um usuário pode, se quiser, comentar mais de uma vez o mesmo post. 

- 11. Implemente a funcionalidade que permita que o token de autenticação seja atualizado

    Também conhecido como "Refresh Token", você deve implementar um endpoint que permita que o Frontend autalize o "acess token", caso este expire