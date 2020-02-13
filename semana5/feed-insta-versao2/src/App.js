import React from 'react';
import './App.css';

import styled from 'styled-components'

import Header from './Components/Header/Header'
import FormularioPost from './Components/FormularioPost/FormularioPost';
import Post from './Components/Post/Post';

const Container = styled.div`
  background-color: #FAFAFA;
  color: rgba(var(--i1d,38,38,38),1);
  margin: 0;
`

const MainEstilo = styled.div`
  margin-top: 7vh;
  padding: 1vh 1vw;
  min-height: 91vh;
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [{
        imagemPerfilForm: '',
        autorForm: '',
        imagemPostForm: ''
      }]
    }
  }  

  onCriaPost = (novoPost) => {
    console.log(novoPost)
  }


  render() {

    const listaDePost = this.state.posts.map((cadapost) => {
      return (<Post 
        imagemPerfil={cadapost.imagemPerfilForm} 
        autor={cadapost.autorForm} 
        imagemPost={cadapost.imagemPostForm}
      />)
    })

    return (

      <Container>

        <Header />

        <MainEstilo>
          <FormularioPost onCriaPost={this.onCriaPost}/>
          {listaDePost}
        </MainEstilo>

      </Container>

    )
  }
}

export default App;
