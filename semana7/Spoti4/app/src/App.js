import React from 'react';

import * as S from './App-styled'

import Header from './components/Header';
import Footer from './components/Footer';
// import TelaBoasVindas from './components/TelaBoasVindas';
// import TelaCadastroPlaylists from './components/TelaCadastroPlaylists';
// import TelaListaPlaylists from './components/TelaListaPlaylists';
import Main from './components/Main';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // telaClicada: ''
    }
  }

  // mudaTelaCadastro = () => {
  //   this.setState({ telaClicada: 'cadastro'})
  // }

  // mudaTelaLista = () => {
  //   this.setState({ telaClicada: 'lista'})
  // }

  render() {

    // let telaAtual
    // switch (this.state.telaClicada) {
    //   case '':
    //     telaAtual = <TelaBoasVindas/>
    //     break;
    //   case 'cadastro':
    //     telaAtual = <TelaCadastroPlaylists/>
    //     break;
    //   case 'lista':
    //     telaAtual = <TelaListaPlaylists/>
    //     break; 
    //   default:
    //     telaAtual = <TelaBoasVindas/>
    //     break;
    // }   

    return (
      <>
  
        <Header />
  
        <S.Main>

          <Main/>
  
          {/* <S.DivBotoes>
            <S.Botao onClick={this.mudaTelaCadastro}>Cadastro de Playlists</S.Botao>
            <S.Botao onClick={this.mudaTelaLista}>Lista de Playlists</S.Botao>
          </S.DivBotoes>
  
          {telaAtual} */}
          
        </S.Main>
  
  
        <Footer />
  
      </>
    )
  }
}

export default App;
