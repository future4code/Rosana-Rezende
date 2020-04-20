import React from 'react'

import axios from 'axios'
import * as S from './styled'
import { Delete } from '@styled-icons/material/Delete'

import { BASEURL } from '../../shared/baseUrl'
import { MYAUTH } from '../../shared/myAuth'
const baseUrl = BASEURL
const myauth = MYAUTH

class TelaPlaylistDetalhe extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			playlistSelected: '',
			nomeMusica: '',
			nomeArtista: '',
			url: 'http://spoti4.future4.com.br/1.mp3',
			adicionarMusica: false,
			returnMessageAddMusic: ''
		}
	}

	componentDidMount() {
		this.getPlaylistMusics()
	}

	getPlaylistMusics = async () => {
		try {
			const response = await axios.get(
				`${baseUrl}/playlists/getPlaylistMusics/${this.props.playlistId}`,
				{
					headers: {
						auth: myauth
					}
				}
			)
			this.setState({ playlistSelected: response.data.result })

		} catch (error) {
			console.log(error.message)
			this.setState({ returnMessageAddMusic: '1' })
		}
	}

	addMusicToPlaylist = async () => {

		let playlistData = {
			playlistId: this.props.playlistId,
			music: {
				name: this.state.nomeMusica,
				artist: this.state.nomeArtista,
				url: this.state.url
			}
		}

		try {
			await axios.put(
				`${baseUrl}/playlists/addMusicToPlaylist`,
				playlistData,
				{
					headers: {
						auth: myauth
					}
				}
			)
			this.setState({
				nomeMusica: '',
				nomeArtista: '',
				url: 'http://spoti4.future4.com.br/1.mp3',
				returnMessageAddMusic: '2'
			})
			this.getPlaylistMusics()

		} catch (error) {
			console.log(error)
			this.setState({ returnMessageAddMusic: '1' })
		}
	}

	clicaAdicionarMusica = () => {
		this.setState({
			adicionarMusica: !this.state.adicionarMusica,
			returnMessageAddMusic: ''
		})
	}

	mudaMusica = (event) => {
		this.setState({ nomeMusica: event.target.value })
	}

	mudaArtista = (event) => {
		this.setState({ nomeArtista: event.target.value })
	}

	mudaUrl = (event) => {
		this.setState({ url: event.target.value })
	}

	deleteMusic = async (musicId) => {
		const deletar = window.confirm('Tem certeza de que deseja deletar a música?')
		if (deletar) {
			try {
				await axios.delete(
					`${baseUrl}/playlists/removeMusicFromPlaylist?playlistId=${this.props.playlistId}&musicId=${musicId}`,
					{
						headers: {
							auth: myauth
						}
					}
				)
				this.setState({ returnMessageAddMusic: '3' })
				this.getPlaylistMusics();
			} catch (error) {
				console.log(error.response)
				this.setState({ returnMessageAddMusic: '1' })
			}
		}
	}

	render() {

		let musicas
		if (this.state.playlistSelected.quantity > 0) {
			musicas = this.state.playlistSelected.musics.map(music => (
				<S.DivDetalheMusica key={music.id}>

					<S.DivDelete>

						<S.P>
							<strong>{music.name}</strong> - <i>{music.artist}</i>
						</S.P>

						<S.Icone onClick={() => this.deleteMusic(music.id)}>
							<Delete />
						</S.Icone>
					</S.DivDelete>

					{music.url.includes('open.spotify') ?
						(<p>
							<strong>Link externo:</strong> <a href={music.url} target='_blank' rel="noopener noreferrer">Tocar no Spotify</a>
						</p>) :
						(<S.Audio controls='controls'>
							<source src={music.url} type="audio/mpeg" />
							Seu navegador não suporta o elemento de áudio.
						</S.Audio>)}


				</S.DivDetalheMusica>
			))
		}

		let listaDeMusicas = (
			<div>
				<S.Titulo>{this.props.playlistName}</S.Titulo>
				<S.P>
					{this.state.playlistSelected.quantity} {this.state.playlistSelected.quantity === 1 ? 'música' : 'músicas'} na playlist
				</S.P>

				<S.Botao onClick={this.clicaAdicionarMusica}>Adicionar Música</S.Botao>

				{musicas}

			</div>
		)

		let telaAdicionarMusica = (
			<S.DivAddMusic>
				<p><strong>Adicionar música na playlist</strong></p>
				<S.Titulo>{this.props.playlistName}</S.Titulo>

				<S.DivInterna>
					<S.Input
						placeholder='Nome da música'
						value={this.state.nomeMusica}
						onChange={this.mudaMusica}
					/>
					<S.Input
						placeholder='Artista'
						value={this.state.nomeArtista}
						onChange={this.mudaArtista}
					/>
					<S.Input
						value={this.state.url}
						onChange={this.mudaUrl}
					/>
				</S.DivInterna>

				<S.DivBotoes>
					<S.Botao2 onClick={this.addMusicToPlaylist}>Adicionar música</S.Botao2>
					<S.Botao2 onClick={this.clicaAdicionarMusica}>Voltar</S.Botao2>
				</S.DivBotoes>

			</S.DivAddMusic>
		)

		let message
		if (this.state.returnMessageAddMusic) {
			if (this.state.returnMessageAddMusic === '1') {
				message = 'Não foi possível efetuar essa operação. Tente novamente mais tarde'
			}
			if (this.state.returnMessageAddMusic === '2') {
				message = 'Música adicionada com sucesso'
			}
			if (this.state.returnMessageAddMusic === '3') {
				message = 'Música deletada com sucesso'
			}
		}

		return (
			<S.Wrapper>

				{this.state.adicionarMusica ? telaAdicionarMusica : listaDeMusicas}

				<S.Resposta>
					<h4>{this.state.returnMessageAddMusic && message}</h4>
				</S.Resposta>

			</S.Wrapper>
		)

	}
}

export default TelaPlaylistDetalhe