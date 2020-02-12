import React from 'react'
import './Post.css'

class Post extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            iconeFavorite: 'favorite_border',
            curtidas: true,
            quantidadeDeCurtidas: 0,
            cor: {color:"black"},
            quantidadeDeComentarios: 0,
            comentario: false,
        }
    }

    clicouNoCurtir = () => {
        if (this.state.curtidas) {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas + 1,
                iconeFavorite: 'favorite',
                cor: {color:"red"},
                curtidas: false
            })
        } else {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas - 1,
                iconeFavorite: 'favorite_border',
                cor: {color:"black"},
                curtidas: true
            })
        }
    }

    DuploClique = () => {
        if (this.state.curtidas) {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas + 1,
                iconeFavorite: 'favorite',
                cor: {color:"red"},
                curtidas: false
            })
        } else {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas - 1,
                iconeFavorite: 'favorite_border',
                cor: {color:"black"},
                curtidas: true
            })
        }
    }

    clicouNoComentar = () => {
        this.setState({
            comentario: true
        })
    }

    apareceComentario = () => {
        if (this.state.comentario) {
            return (
                <div className='escrever-comentario'>
                    <input placeholder='Escreva seu comentário' onChange={ this.conteudoInput} value={ this.state.meucomentario }></input>
                    <button onClick={this.jaComentou}>Enviar</button>
                </div>
            )
        }
    }

    conteudoInput = (event) => {
        this.setState({
            meucomentario: event.target.value
        })
    }


    jaComentou = (event) => {
        this.setState({
            comentario: false,
            quantidadeDeComentarios: this.state.quantidadeDeComentarios + 1,
        })
    }
    

    render() {
        
        return (
            <div className='Post'>

                <div className='cada-postagem'>
                    <div className='cabeçalho'>
                        <img src={ this.props.imagemPerfil } alt='' />
                        <span>{this.props.autor}</span>
                    </div>

                    <div className='imagem-post'>
                        <img src={ this.props.imagemPost } alt='' onDoubleClick={this.DuploClique} />
                    </div>

                    <div className='interacao'>

                        <div className='curtidas-comentarios'>

                            <div className='curtidas'>
                                <i onClick={this.clicouNoCurtir} 
                                    class="material-icons" 
                                    style={ this.state.cor }> 
                                    {this.state.iconeFavorite} 
                                </i>
                                {this.state.quantidadeDeCurtidas}
                            </div>

                            <div className='comentarios'>
                                <i onClick={this.clicouNoComentar} class="material-icons">feedback</i>
                                {this.state.quantidadeDeComentarios}
                            </div>

                        </div>

                        <div className='aparece-comentario'>
                            {this.apareceComentario()}
                        </div>

                        <div className='comentario-enviado'>
                            { this.state.meucomentario }
                        </div>

                    </div>

                </div>


            </div>
        )
    }

}

export default Post