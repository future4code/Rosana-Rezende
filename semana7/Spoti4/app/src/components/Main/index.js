import React from 'react'

import * as S from './styled'
import TelaBoasVindas from '../TelaBoasVindas'
import TelaCadastroPlaylists from '../TelaCadastroPlaylists'
import TelaListaPlaylists from '../TelaListaPlaylists'
import TelaPlaylistDetalhe from '../TelaPlaylistDetalhe'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            telaClicada: '',
            playlistId: '',
            playlistName: ''
        }
    }

    mudaTelaCadastro = () => {
        this.setState({ telaClicada: 'cadastro' })
    }

    mudaTelaLista = () => {
        this.setState({ telaClicada: 'lista' })
    }

    detailPlaylist = (playlistIdClick, playlistNameClick) => {
        this.setState({
            telaClicada: 'detalhe',
            playlistId: playlistIdClick,
            playlistName: playlistNameClick
        })
    }

    render() {

        let telaAtual
        switch (this.state.telaClicada) {
            case '':
                telaAtual = <TelaBoasVindas />
                break;
            case 'cadastro':
                telaAtual = <TelaCadastroPlaylists />
                break;
            case 'lista':
                telaAtual = <TelaListaPlaylists 
                    onClickPlaylist={this.detailPlaylist} 
                />
                break;
            case 'detalhe':
                telaAtual = <TelaPlaylistDetalhe 
                    playlistId={this.state.playlistId} 
                    playlistName={this.state.playlistName}
                />
                break;
            default:
                telaAtual = <TelaBoasVindas />
                break;
        }

        return (
            <>
                <S.Wrapper>
                    <S.Botao onClick={this.mudaTelaCadastro}>Cadastrar Playlist</S.Botao>
                    <S.Botao onClick={this.mudaTelaLista}>Visualizar Playlists</S.Botao>
                </S.Wrapper>

                {telaAtual}
            </>

        )
    }
}

export default Main