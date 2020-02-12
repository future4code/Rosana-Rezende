import React from 'react'
import './Post.css'

class Post extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            iconeFavorite: 'favorite_border',
            curtidas: true,
            quantidadeDeCurtidas: 0,
            quantidadeDeComentarios: 0,
            comentario: false
        }
    }

    clicouNoCurtir = () => {
        if (this.state.curtidas) {
            this.setState({
                quantidadeDeCurtidas: 1,
                iconeFavorite: 'favorite',
                curtidas: false
            })
        } else {
            this.setState({
                quantidadeDeCurtidas: 0,
                iconeFavorite: 'favorite_border',
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
                    <input placeholder='Escreva seu comentário'></input>
                    <button onClick={this.jaComentou}>Comentar</button>
                </div>
            )
        }
    }

    jaComentou = () => {
        this.setState({
            comentario: false,
            quantidadeDeComentarios: this.state.quantidadeDeComentarios + 1
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
                        <img src={ this.props.imagemPost } alt='' />
                    </div>

                    <div className='interacao'>

                        <div className='curtidas-comentarios'>

                            <div className='curtidas'>
                                <i onClick={this.clicouNoCurtir} class="material-icons" > {this.state.iconeFavorite} </i>
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

                    </div>

                </div>


            </div>
        )
    }

}

export default Post