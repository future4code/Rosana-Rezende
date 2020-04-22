import React from 'react'
import styled from 'styled-components'
import Comentarios from '../Comentarios/Comentarios'

const PostContainer = styled.div`
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: #FFFFFF;
    border-radius: 2px;
    margin: 2vh auto;
    width: 40vw;
`

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 1vh 0;
`

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 0 1vw;
`

const PostMain = styled.div``

const ImagemPrincipal = styled.img`
    display: block;
    margin: auto;
    width: 100%;
`

const PostFooter = styled.div``

const ClicaCurtirEComentar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1vh 1vw;
`

const TudoCentralizado = styled.div`
    display: flex;
    align-items: center;
`

const ComentariosInputEBotao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    /* justify-content: flex-end; */
    /* align-items: flex-end; */
`

const InputEBotao = styled.div``

const Input = styled.input`
    width: 80%;
    /* font-size: 70%; */
`

const Button = styled.button`
    width: 18%;
    margin-left: 1%;
    /* font-size: 70%; */
`

const ApareceComentarios = styled.div`
    margin: 5%;
`


class Post extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            curtidas: false,
            quantidadeDeCurtidas: 0,
            iconeFavorite: 'favorite_border',
            cor: { color: "black" },
            
            comentario: false,
            quantidadeDeComentarios: 0,

            inputComentario: '',
            comentarios: []

        }
    }

    clicouNoCurtir = () => {
        if (this.state.curtidas === false) {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas + 1,
                iconeFavorite: 'favorite',
                cor: { color: "red" },
                curtidas: true
            })
        } else {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas - 1,
                iconeFavorite: 'favorite_border',
                cor: { color: "black" },
                curtidas: false
            })
        }
    }

    clicouNoComentar = () => {
        this.setState({
            comentario: true
        })
    }

    apareceInputEBotao = () => {
        if (this.state.comentario) {
            return (
                <InputEBotao>
                    <Input 
                        placeholder='Escreva seu comentário' 
                        value={this.state.inputComentario}
                        onChange={this.conteudoInput} 
                        onKeyDown={this.apertouEnter}
                    />
                    <Button onClick={this.criaComentario}>
                        Enviar
                    </Button>
                </InputEBotao>
            )
        }
    }

    conteudoInput = (event) => {
        this.setState({
            inputComentario: event.target.value
        })
    }

    apertouEnter = (event) => {
        if(event.keyCode === 13){
            this.criaComentario()
        }
    }

    criaComentario = () => {
                
        const maisUmComentario = this.state.inputComentario
        const copiaDeComentarios = this.state.comentarios
        copiaDeComentarios.push(maisUmComentario)
        
        this.setState({
            comentario: false,
            quantidadeDeComentarios: this.state.quantidadeDeComentarios + 1,
            inputComentario: '',
            comentarios: copiaDeComentarios
        })
    }

    render() {
    
        const listaDeComentarios = this.state.comentarios.map( (cadaComentario, index) => {
            return <Comentarios key={index} comment={cadaComentario}></Comentarios>
            // se eu não fosse colocar tb curtir e tal, bastava <div key={index}>{cadaComentario}</div>
        })

        return (
            <PostContainer>

                <PostHeader>
                    <Avatar src={this.props.imagemPerfil} alt='' />
                    <span>{this.props.autor}</span>
                </PostHeader>


                <PostMain>
                    <ImagemPrincipal src={this.props.imagemPost} alt='' onDoubleClick={this.clicouNoCurtir} />
                </PostMain>


                <PostFooter>

                    <ClicaCurtirEComentar>

                        <TudoCentralizado>
                            <i onClick={this.clicouNoCurtir}
                                className="material-icons"
                                style={this.state.cor}>
                                {this.state.iconeFavorite}
                            </i>
                            {this.state.quantidadeDeCurtidas}
                        </TudoCentralizado>

                        <TudoCentralizado>
                            <i onClick={this.clicouNoComentar} className="material-icons">feedback</i>
                            {this.state.quantidadeDeComentarios}
                        </TudoCentralizado>

                    </ClicaCurtirEComentar>

                    <ComentariosInputEBotao>
                        
                        <ApareceComentarios>
                            {listaDeComentarios}
                        </ApareceComentarios>
                        
                        {this.apareceInputEBotao()}
                        
                    </ComentariosInputEBotao>

                </PostFooter>

            </PostContainer>
        )
    }

}

export default Post 