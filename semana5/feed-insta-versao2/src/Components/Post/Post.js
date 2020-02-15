import React from 'react'
import styled from 'styled-components'

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

const ImagemPrincipal = styled.div`
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
            iconeFavorite: 'favorite_border',
            curtidas: true,
            quantidadeDeCurtidas: 0,
            cor: { color: "black" },
            quantidadeDeComentarios: 0,
            comentario: false,
        }
    }

    clicouNoCurtir = () => {
        if (this.state.curtidas) {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas + 1,
                iconeFavorite: 'favorite',
                cor: { color: "red" },
                curtidas: false
            })
        } else {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas - 1,
                iconeFavorite: 'favorite_border',
                cor: { color: "black" },
                curtidas: true
            })
        }
    }

    DuploClique = () => {
        if (this.state.curtidas) {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas + 1,
                iconeFavorite: 'favorite',
                cor: { color: "red" },
                curtidas: false
            })
        } else {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas - 1,
                iconeFavorite: 'favorite_border',
                cor: { color: "black" },
                curtidas: true
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
                    <Input placeholder='Escreva seu comentário' onChange={this.conteudoInput} value={this.state.meucomentario}/>
                    <Button onClick={this.criaComentario}>Enviar</Button>
                </InputEBotao>
            )
        }
    }

    conteudoInput = (event) => {
        this.setState({
            meucomentario: event.target.value
        })
    }


    criaComentario = (event) => {
        this.setState({
            comentario: false,
            quantidadeDeComentarios: this.state.quantidadeDeComentarios + 1,
        })
    }


    render() {

        return (
            <PostContainer>

                <PostHeader>
                    <Avatar src={this.props.imagemPerfil} alt='' />
                    <span>{this.props.autor}</span>
                </PostHeader>


                <PostMain>
                    <ImagemPrincipal src={this.props.imagemPost} alt='' onDoubleClick={this.DuploClique} />
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
                            {this.state.meucomentario}
                        </ApareceComentarios>
                        
                        {this.apareceInputEBotao()}
                        
                    </ComentariosInputEBotao>

                </PostFooter>

            </PostContainer>
        )
    }

}

export default Post 