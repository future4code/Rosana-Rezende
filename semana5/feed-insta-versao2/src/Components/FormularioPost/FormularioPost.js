import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
`

const FormularioEstilo = styled.form`
    margin: 2vh auto;
    width: 80vw;
`

const InputEstilo = styled.input`
    display: block;
    margin-bottom: 1vh;
    width: 100%;
    outline: 0;
`

const BotaoEstilo = styled.button``


class FormularioPost extends React.Component {

    constructor(props) {
        super(props)
    }

    onChangeAutor = (event) => {
        this.setState({autorForm: event.target.value})
      }
    
      onChangeImagemPerfil = (event) => {
        this.setState({imagemPerfilForm: event.target.value})
      }
    
      onChangePost = (event) => {
        this.setState({imagemPostForm: event.target.value})
      }
    
      criaPost = (event) => {
        event.preventDefault() // pra ele não ficar atualizando a página
        // console.log(this.state.autorForm)
        // console.log(this.state.imagemPerfilForm)
        // console.log(this.state.imagemPostForm)
        this.props.onCriaPost({
            autor: this.state.autorForm,
            imagemPerfil: this.state.imagemPerfilForm,
            imagemPost: this.state.imagemPostForm
        })
      
      }

    render() {
        return (
            <Container>

        <FormularioEstilo>
            <label>Nome do Usuário: </label>
            <InputEstilo value={this.props.autor} onChange={ this.onChangeAutor }/>
            <label>Foto de perfil (url): </label>
            <InputEstilo value={this.props.imagemPerfil} onChange={ this.onChangeImagemPerfil }/>
            <label>Foto do Post (url): </label>
            <InputEstilo value={this.props.imagemPost} onChange={ this.onChangePost }/>
            <BotaoEstilo onClick={this.criaPost}>Criar Post</BotaoEstilo>
          </FormularioEstilo>
                
                
                
            </Container>
        )
    }

}

export default FormularioPost