import React from 'react'

import * as S from './styled'

import TelaBoasVindas from '../TelaBoasVindas'
import TelaCadastroPlaylists from '../TelaCadastroPlaylists'
import TelaListaPlaylists from '../TelaListaPlaylists'
import TelaPlaylistDetalhe from '../TelaPlaylistDetalhe'
import TelaAdicionaMusica from '../TelaAdicionarMusica'
import TelaBuscarMusicas from '../TelaBuscarMusicas'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			telaClicada: '',
			playlistId: '',
			playlistName: '',
		}
	}

	mudaTelaCadastro = () => {
		this.setState({ telaClicada: 'cadastro' })
	}

	mudaTelaLista = () => {
		this.setState({ telaClicada: 'lista' })
	}

	mudaTelaAdicionarMusica = () => {
		this.setState({ telaClicada: 'adicionaMusica' })
	}

	mudaTelaBurcarMusicas = () => {
		this.setState({ telaClicada: 'buscaMusicas' })
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
					allPlaylistsHere={this.getAllPlaylistsHere}
				/>
				break;
			case 'detalhe':
				telaAtual = <TelaPlaylistDetalhe
					playlistId={this.state.playlistId}
					playlistName={this.state.playlistName}
				/>
				break;
			case 'adicionaMusica':
				telaAtual = <TelaAdicionaMusica	/>
				break;
			case 'buscaMusicas':
				telaAtual = <TelaBuscarMusicas/>
				break;
			default:
				telaAtual = <TelaBoasVindas />
				break;
		}

		return (
			<>
				<S.HeaderWrapper>
					<h1>Spoti4</h1>
					<S.DivBotoes>
						<S.Botao onClick={this.mudaTelaCadastro}>Cadastrar Playlist</S.Botao>
						<S.Botao onClick={this.mudaTelaLista}>Visualizar Playlists</S.Botao>
						<S.Botao onClick={this.mudaTelaAdicionarMusica}>Adicionar músicas com LINK</S.Botao>
						<S.Botao onClick={this.mudaTelaBurcarMusicas}>Adicionar músicas do SPOTIFY</S.Botao>
					</S.DivBotoes>
				</S.HeaderWrapper>
				<S.DivMain>

					{telaAtual}
				</S.DivMain>
			</>
		)
	}
}

export default Header