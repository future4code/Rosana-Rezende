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
    if (this.state.mostraTela === 'cadastro') {
      estadoAtual = 'lista'
    }
    if (this.state.mostraTela === 'lista') {
      estadoAtual = 'cadastro'
    }
    if (this.state.mostraTela === 'detalhe') {
      estadoAtual = 'lista'
    }

    this.setState({ mostraTela: estadoAtual })
  }

  detalhaUsuario = (idDoUsuario) => {
    console.log(idDoUsuario)
    
    this.setState({ 
      mostraTela: 'detalhe',
      idDoUsuarioClicado: idDoUsuario
    })

    console.log(this.state.idDoUsuarioClicado)
  }
   

  render() {

    let nomeBotao
    if (this.state.mostraTela === 'cadastro') {
      nomeBotao = 'LISTA'
    }
    if (this.state.mostraTela === 'lista' || this.state.mostraTela === 'detalhe') {
      nomeBotao = 'VOLTAR'
    }

    let telaAtual
    if (this.state.mostraTela === 'cadastro') {
      telaAtual = <TelaCadastro />
    }
    if (this.state.mostraTela === 'lista') {
      telaAtual = 
        <TelaListaDeUsuarios 
          aoClicarNoUsuario={this.detalhaUsuario} 
        />
    }
    if (this.state.mostraTela === 'detalhe') {
      telaAtual = 
        <DetalheDoUsuario 
          // mandar alguma coisa
          usuarioClicadoId={this.state.idDoUsuarioClicado}

        />
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
