import React from 'react';
import styled from 'styled-components'

import Header from './Components/Header/Header'
import FormularioPost from './Components/FormularioPost/FormularioPost';
import Post from './Components/Post/Post';

const Container = styled.div`
  background-color: #FAFAFA;
  color: rgba(var(--i1d,38,38,38),1);
  margin: 0;
  font-family: 'Roboto', sans-serif;
`

const MainEstilo = styled.div`
  margin-top: 6vh;
  padding: 1vh 1vw;
  min-height: 91vh;
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
      
      /* ================== FINS DIDÁTICOS
      Se eu quisesse uma lista de post começando com um, por exemplo:
      posts: [{
        imagemPerfil: 'https://cdn.pixabay.com/photo/2019/10/21/08/28/couple-4565429__480.jpg',
        autor: 'casal_legal',
        imagemPost: 'https://cdn.pixabay.com/photo/2019/06/22/18/26/woman-4292185__480.jpg'
      }]
      */
    }
  }

  onCriaPost = ({autor, imagemPerfil, imagemPost}) => {

    if(autor && imagemPerfil && imagemPost ) {
      const maisUmPost = {
        imagemPerfil: imagemPerfil,
        autor: autor,
        imagemPost: imagemPost
      }
  
      this.setState({
        posts: [maisUmPost,...this.state.posts]
      })
    } else {
      alert('Preencha todos os campos para Postar')
    }    

  }

  render() {

    let listaDePost = this.state.posts.map((cadapost, index) => {
      return (<Post
        key={index}
        imagemPerfil={cadapost.imagemPerfil}
        autor={cadapost.autor}
        imagemPost={cadapost.imagemPost}
      />)
    })

    return (

      <Container>

        <Header />

        <MainEstilo>
          <FormularioPost onCriaPost={this.onCriaPost} />
          {listaDePost}
        </MainEstilo>

      </Container>

    )
  }
}

export default App;
