import React from 'react'

import * as S from './styled'

// import axios from 'axios'

// import { BASEURL } from '../../shared/baseUrl'
// import { MYAUTH } from '../../shared/myAuth'
// const baseUrl = BASEURL
// const myauth = MYAUTH

import SpotifyWebApi from 'spotify-web-api-js';
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
			// nowPlaying: { name: 'Not Checked', albumArt: '' },
			musicSearch: '',
			musicFind: []
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

	// getNowPlaying() {
	//     spotifyApi.getMyCurrentPlaybackState()
	//         .then(response => {
	//             this.setState({
	//                 nowPlaying: {
	//                     name: response.item.name,
	//                     albumArt: response.item.album.images[0].url
	//                 }
	//             })
	//         })
	// }
	

	handleMusicSearch = (event) => {
		this.setState({ musicSearch: event.target.value })
	}

	searchMusic = () => {
		spotifyApi.searchTracks(this.state.musicSearch)
			.then(data => {
				this.setState({ musicFind: data.tracks.items })
			}, function (err) {
				console.error(err);
			});

	}

	render() {

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

				</S.Div>
			))
		}

		return (
			<S.Wrapper>
				<S.H2>Buscar Música</S.H2>

				<S.Div>
					{!this.state.loggedIn &&
						<a href='http://localhost:8888'>
							<S.Botao>Login com Spotify</S.Botao>
						</a>
					}
				</S.Div>

				{/* TOCANDO AGORA */}
				{/* <S.Div>
                    {this.state.loggedIn &&
                        <S.Botao onClick={() => this.getNowPlaying()}>
                            Checar o que está tocando...
                        </S.Botao>
                    }
                </S.Div>

                <S.Div>
                    Tocando agora: {this.state.nowPlaying.name}
                </S.Div>

                <S.Div>
                    <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} alt='' />
                </S.Div> */}


				<S.Div>
					<S.Input
						type='text'
						placeholder='Buscar Músicas'
						value={this.state.musicSearch}
						onChange={this.handleMusicSearch}
					/>
					<S.Botao onClick={() => this.searchMusic()}>Buscar</S.Botao>
				</S.Div>

				<S.Div>
					{this.state.musicFind && listMusic}
				</S.Div>

				{/*<S.Div>
                    Respostas
                </S.Div> */}

			</S.Wrapper>
		)
	}
}

export default TelaBuscarMusicas