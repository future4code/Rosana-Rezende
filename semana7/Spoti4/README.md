# Future4 | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

<p align="center">
  <img  width='500' src='https://user-images.githubusercontent.com/45580434/74607837-f69f5e00-50ba-11ea-97e0-62fab855bcb6.png'>
</p>

## Projeto: Spoti4

[Site do projeto - SEM integração do Spotify](http://spoti4-rosana.surge.sh/)

<p align="center">
  <img  height='320' src='https://user-images.githubusercontent.com/45580434/76128847-469b8180-5fe4-11ea-8877-85ee691040a0.gif'>
</p>

[Site do projeto - COM integração do Spotify](http://spoti4-v2-rosana.surge.sh/)

<p align="center">
  <img  height='320' src='https://user-images.githubusercontent.com/45580434/76174620-26f08e80-6187-11ea-97a4-afa6b49ebe5c.gif'>
  <img  height='320' src='https://user-images.githubusercontent.com/45580434/76174631-4b4c6b00-6187-11ea-849b-6008e9a6223a.gif'>
</p>


**Desenvolvido por:** [Rosana Rezende](https://www.linkedin.com/in/rosanarezende/)

<br>


### Escopo do projeto
Realizar uma integração com a API Spotif4, que permite o gerenciamento básico de playlist de músicas.
<br>

[Documentação da API do Spoti4](https://documenter.getpostman.com/view/4233568/SVtWvmod?version=latest)

[Documentação da API do Spotify](https://developer.spotify.com/documentation/web-api/)
<br>

#### Requisitos obrigatórios

- [x] O usuário deve ser capaz de criar uma playlist de músicas. Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.

- [x] Deve haver a possibilidade do usuário visualizar todas as suas playlists, em uma lista específica. Nesta lista, o usuário também pode deletar alguma playlist.

- [x] O usuário deve ser capaz de visualizar os detalhes de uma playlist: o seu nome e as músicas que fazem parte dela.

- [x] Para adicionar músicas à playlist, o usuário deve informar: o nome, os artistas relacionados (que pode ser só um cantor ou uma banda) e um link com o arquivo de áudio correspondente a esta música
    - Subimos algumas músicas neste site: [http://spoti4.future4.com.br/1.mp3](http://spoti4.future4.com.br/1.mp3) → Vocês podem escolher entre 100 músicas que separamos, só ir trocando o nome do arquivo na URL.

- [x] Por fim, quando o usuário abrir o detalhe da playlist, ele deve ser capaz de ouvir à cada uma das músicas que estiverem inseridas na playlist. Um botão de 'play' e 'pause' é essencial para isto

<br><br>

#### Desafio

[x] Como desafio, queríamos que vocês tivessem a ~~diversão~~ experiência de testar a API do Spotify (sim sim, nosso principal concorrente 😢). A ideia é a seguinte:

Nós queremos criar uma funcionalidade em que o usuário possa pesquisar uma música (através do seu nome e/ou do autor dela). O resultado desta pesquisa deve ser mostrado em uma lista. No momento em que ele clicar em alguma música da lista, devemos pedir para o usuário escolher uma playlist para que esta música possa ser adicionada nela. 

Os fluxos, as telas, as informações a serem mostradas são vocês quem devem pensar! O importante é o usuário conseguir pesquisar e adicionar na sua playlist.

- A playlist deve ser adicionada na API do Spotif4. Em outras palavras, vocês estarão mexendo com duas APIs diferentes no mesmo projeto.

<br>

