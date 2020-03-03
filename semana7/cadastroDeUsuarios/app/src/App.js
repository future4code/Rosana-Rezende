import React, {Component} from 'react';

import TelaCadastro from './Components/TelaCadastro';
import TelaListaDeUsuarios from './Components/TelaListaDeUsuarios';
import Header from './Components/Header';

import styled from 'styled-components'

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
      mostraCadastro: true,
    }
  }

  mostraCadastroLista = () => {
    this.setState({mostraCadastro: !this.state.mostraCadastro})
  }

  render() {
       
    return (
      <AppContainer>
        <Header/>

        <AppBotao onClick={this.mostraCadastroLista}>
          {this.state.mostraCadastro ? 'LISTA' : 'VOLTAR'}
        </AppBotao>

        {this.state.mostraCadastro ? <TelaCadastro/> : <TelaListaDeUsuarios/>}
  
      </AppContainer>
    );
  }
}

export default App;
