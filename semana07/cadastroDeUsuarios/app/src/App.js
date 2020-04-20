import React, { Component } from 'react';

import TelaCadastro from './Components/TelaCadastro';
import TelaListaDeUsuarios from './Components/TelaListaDeUsuarios';
import Header from './Components/Header';

import styled from 'styled-components'
import DetalheDoUsuario from './Components/DetalheDoUsuario';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`

const AppBotao = styled.button`
  position: fixed;
  top: 7vh;
  right: 1vw;
  border-radius: 50px;
  outline: 0;
  font-family: 'Roboto', sans-serif;
  padding: 5px 10px;
  background-color: black;
  color: white;
  font-size: 1rem;
`

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mostraTela: 'cadastro',
      idDoUsuarioClicado: ''
    }
  }

  mostraCadastroLista = () => {
    let estadoAtual
    switch (this.state.mostraTela) {
      case 'cadastro':
        estadoAtual = 'lista'
        break;
      case 'lista':
        estadoAtual = 'cadastro'
        break;
      case 'detalhe':
        estadoAtual = 'lista'
        break;
      default:
        alert('Desculpe, não encontramos páginas para exibir')
        break;
    }
    this.setState({ mostraTela: estadoAtual })
  }

  detalhaUsuario = (idDoUsuario) => {
    this.setState({
      mostraTela: 'detalhe',
      idDoUsuarioClicado: idDoUsuario
    })
  }

  render() {

    let nomeBotao
    let telaAtual
    switch (this.state.mostraTela) {
      
      case 'cadastro':
        telaAtual = <TelaCadastro />
        nomeBotao = 'LISTA'
        break;

      case 'lista':
        telaAtual =
          <TelaListaDeUsuarios aoClicarNoUsuario={this.detalhaUsuario}/>
          nomeBotao = 'VOLTAR'
        break;

      case 'detalhe':
        telaAtual =
          <DetalheDoUsuario usuarioClicadoId={this.state.idDoUsuarioClicado}/>
          nomeBotao = 'VOLTAR'
        break;

      default:
        alert('Desculpe, não encontramos páginas para exibir')
        break;
    }

    return (
      <AppContainer>
        <Header />

        <AppBotao onClick={this.mostraCadastroLista}>
          {nomeBotao}
        </AppBotao>

        {telaAtual}

      </AppContainer>
    );
  }
}

export default App;
