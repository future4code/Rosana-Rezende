import React from 'react'

import * as S from './styled'

import axios from 'axios'

import { BASEURL } from '../../shared/baseUrl'
import { MYAUTH } from '../../shared/myAuth'

import SpotifyWebApi from 'spotify-web-api-js';

const baseUrl = BASEURL
const myauth = MYAUTH

const spotifyApi = new SpotifyWebApi()


class TelaBuscarMusicas extends React.Component {
	constructor(props) {
		super(props)
		const params = this.getHashParams();
		const token = params.access_token;
		if (token) {
			spotifyApi.setAccessToken(token);
		}
		this.state = {
			loggedIn: token ? true : false,
			musicSearch: '',
			musicFind: [],
			IdPlaylist: '',
			allPlaylists: [],
			returnMessageAddMusic: ''
		}
	}

	getHashParams() {
		var hashParams = {};
		var e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		e = r.exec(q)
		while (e) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
			e = r.exec(q);
		}
		return hashParams;
	}


	handleMusicSearch = (event) => {
		this.setState({ musicSearch: event.target.value })
	}

	searchMusic = () => {
		spotifyApi.searchTracks(this.state.musicSearch)
			.then(data => {
				this.setState({ 
					musicFind: data.tracks.items,
					musicSearch: '',
				})
			}, function (err) {
				console.error(err);
			});

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

	addMusicToPlaylistAppears = async (nomeMusica, nomeArtista, url) => {

		let playlistData = {
			playlistId: this.state.IdPlaylist,
			music: {
				name: nomeMusica,
				artist: nomeArtista,
				url: url
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
				IdPlaylist: '',
				returnMessageAddMusic: '2'
			})
			this.getAllPlaylists()

		} catch (error) {
			console.log(error)
			this.setState({ returnMessageAddMusic: '1' })
		}
	}

	render() {

		let message
		if (this.state.returnMessageAddMusic) {
			if (this.state.returnMessageAddMusic === '0') {
				message = ''	
			}
			if (this.state.returnMessageAddMusic === '1') {
				message = <h4>Não foi possível efetuar essa operação. Tente novamente mais tarde</h4>
			}
			if (this.state.returnMessageAddMusic === '2') {
				message = <h4>Música adicionada com sucesso na playlist</h4>
			}
		}

		let playlistsOption
		if (this.state.allPlaylists.list) {
			playlistsOption = this.state.allPlaylists.list.map(playlist => (
				<option key={playlist.id} value={playlist.id}>{playlist.name}</option>
			))
		} else {
			playlistsOption = <option>Carregando...</option>

		}

		let listMusic
		if (this.state.musicFind) {
			listMusic = this.state.musicFind.map(dado => (
				<S.Div key={dado.id}>
					<p>
						<strong>Nome da música:</strong> {dado.name}
					</p>
					<p>
						<strong>Artista(s):</strong> {dado.artists.map(nome => <span key={nome.id}>{nome.name}. </span>)}
					</p>
					<p>
						<strong>Link externo:</strong> <a href={dado.external_urls.spotify} target='_blank' rel="noopener noreferrer">Tocar no Spotify</a>
					</p>

					<S.Div2>

					<S.Select onChange={this.mudaPlaylist}>
						<option hidden>Selecione uma playlist</option>
						{playlistsOption}
					</S.Select>

					<S.Botao2 onClick={() => this.addMusicToPlaylistAppears(dado.name, dado.artists[0].name, dado.external_urls.spotify)}>Adicionar na playlist</S.Botao2>
					</S.Div2>

				</S.Div>
			))
		}

		return (
			<S.Wrapper>
				<S.DivLogin>
						<a href='http://localhost:8888'>
							<S.Botao>Login com Spotify</S.Botao>
						</a>
				</S.DivLogin>

				<S.H2>Buscar Música</S.H2>

				<S.Div>
					<S.Input
						type='text'
						placeholder='Buscar Músicas'
						value={this.state.musicSearch}
						onChange={this.handleMusicSearch}
					/>
					<S.Botao onClick={() => this.searchMusic()}>Buscar</S.Botao>
				</S.Div>

				<S.Resposta>
					{this.state.returnMessageAddMusic && message}
				</S.Resposta>

				<S.Div>
					{this.state.musicFind && listMusic}
				</S.Div>

			</S.Wrapper>
		)
	}
}

export default TelaBuscarMusicas