import React from 'react'

import axios from 'axios'
import * as S from './styled'

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'

const myauth = 'rosana'

class TelaPlaylistDetalhe extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			playlistSelected: '',
			nomeMusica: '',
			nomeArtista: '',
			url: 'http://spoti4.future4.com.br/1.mp3',
			adicionarMusica: false
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

			alert('Usuário adicionado com sucesso')
			this.setState({
				nomeMusica: '',
				nomeArtista: '',
				url: 'http://spoti4.future4.com.br/1.mp3'
			})
			this.getPlaylistMusics()




		} catch (error) {
			console.log(error)
		}
	}

	clicaAdicionarMusica = () => {
		this.setState({ adicionarMusica: !this.state.adicionarMusica })
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


	render() {

		let musicas
		if (this.state.playlistSelected.quantity > 0) {
			musicas = this.state.playlistSelected.musics.map(music => (
				<S.DivDetalheMusica key={music.id}>
					<p>
						{music.name} - {music.artist}
					</p>
					<audio controls='controls'>
						<source src={music.url} type="audio/mpeg"/>
					</audio>

					{/* <a href={music.url}>Link</a> */}
				</S.DivDetalheMusica>
			))
		}

		let listaDeMusicas = (
			<div>
				<S.H2>Detalhes da playlist '{this.props.playlistName}'</S.H2>
				<p>
					{this.state.playlistSelected.quantity} músicas na playlist
				</p><br></br>
				
					{musicas}
				
				<br />
				<S.Botao onClick={this.clicaAdicionarMusica}>Adicionar Música</S.Botao>
			</div>
		)

		let telaAdicionarMusica = (
			<S.DivAddMusic>
				<S.H3>Adicionar música na playlist '{this.props.playlistName}'</S.H3>
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

				<div>
					<S.Botao onClick={this.addMusicToPlaylist}>Adicionar música</S.Botao>
					<S.Botao onClick={this.clicaAdicionarMusica}>Voltar</S.Botao>
				</div>

			</S.DivAddMusic>
		)

		return (
			<S.Wrapper>

				{this.state.adicionarMusica ? telaAdicionarMusica : listaDeMusicas}

			</S.Wrapper>
		)

	}
}

export default TelaPlaylistDetalhe