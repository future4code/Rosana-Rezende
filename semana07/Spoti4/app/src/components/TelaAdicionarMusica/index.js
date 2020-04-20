import React from 'react'

import axios from 'axios'
import * as S from './styled'

import { BASEURL } from '../../shared/baseUrl'
import { MYAUTH } from '../../shared/myAuth'
const baseUrl = BASEURL
const myauth = MYAUTH

class TelaAdicionaMusica extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allPlaylists: [],
			IdPlaylist: '',
			nomeMusica: '',
			nomeArtista: '',
			url: 'http://spoti4.future4.com.br/1.mp3',
			returnMessageAddMusic: ''
		}
	}

	componentDidMount() {
		this.getAllPlaylists();
	}

	getAllPlaylists = async () => {
		try {
			const response = await axios.get(
				`${baseUrl}/playlists/getAllPlaylists`,
				{
					headers: {
						auth: myauth
					}
				}
			)
			this.setState({ allPlaylists: response.data.result })
		} catch (error) {
			console.log(error.response)
			this.setState({ returnMessageAddMusic: '1' })
		}
	}

	mudaPlaylist = (event) => {
		this.setState({ 
			IdPlaylist: event.target.value, 
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

	addMusicToPlaylist = async () => {

		let playlistData = {
			playlistId: this.state.IdPlaylist,
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
			this.getAllPlaylists()

		} catch (error) {
			console.log(error)
			this.setState({ returnMessageAddMusic: '1' })
		}
	}

	render() {

		let playlistsOption
		if (this.state.allPlaylists.list) {
			playlistsOption = this.state.allPlaylists.list.map(playlist => (
				<option key={playlist.id} value={playlist.id}>{playlist.name}</option>
			))
		} else {
			playlistsOption = <option>Carregando...</option>

		}

		let adicionaMusica = (
			<>

				<S.Div>
					<S.Select onChange={this.mudaPlaylist}>
						<option hidden>Selecione uma playlist</option>
						{playlistsOption}
					</S.Select>

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
				</S.Div>

				<S.Botao onClick={this.addMusicToPlaylist}>Adicionar música</S.Botao>

			</>
		)
		
		let filteredPlaylist
		if (this.state.allPlaylists.list && this.state.IdPlaylist) {
			filteredPlaylist = this.state.allPlaylists.list.filter(p => p.id.includes( this.state.IdPlaylist ))
		}

		let message
		if (this.state.returnMessageAddMusic) {
			if (this.state.returnMessageAddMusic === '0') {
				message = ''	
			}
			if (this.state.returnMessageAddMusic === '1') {
				message = <h4>Não foi possível efetuar essa operação. Tente novamente mais tarde</h4>
			}
			if (this.state.returnMessageAddMusic === '2') {
				// message = <h4>Música adicionada com sucesso na playlist</h4>
				message = <span>Música adicionada com sucesso na playlist <strong>{filteredPlaylist[0].name}</strong></span>	
			}
		}		

		return (
			<S.Wrapper>
				<S.H2>Adicionar Música</S.H2>

				{adicionaMusica}

				<S.Resposta>
					{this.state.returnMessageAddMusic && message}
				</S.Resposta>

			</S.Wrapper>
		)
	}
}

export default TelaAdicionaMusica

