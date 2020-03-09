import React from 'react'

import axios from 'axios'
import * as S from './styled'

import { Delete } from '@styled-icons/material/Delete'

import { BASEURL } from '../../shared/baseUrl'
import { MYAUTH } from '../../shared/myAuth'
const baseUrl = BASEURL
const myauth = MYAUTH

class TelaListaPlaylists extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allPlaylists: [],
			returnMessageList: '',
			playlistSearchName: '',
			playlistSearch: [],
			appearsList: true
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
			this.setState({ returnMessageList: '1' })
		}
	}

	deletePlaylist = async (playlistId) => {
		const deletar = window.confirm('Tem certeza de que deseja deletar?')
		if (deletar) {
			try {
				await axios.delete(
					`${baseUrl}/playlists/deletePlaylist?playlistId=${playlistId}`,
					{
						headers: {
							auth: myauth
						}
					}
				)
								
				this.setState({ returnMessageList: '2', appearsList: true })
				this.getAllPlaylists();

			} catch (error) {
				console.log(error.response)
				this.setState({ returnMessageList: '1' })
			}
		}
	}

	playlistSelected = (playlistId, playlistName) => {
		this.props.onClickPlaylist(playlistId, playlistName)
	}

	handleNamePlaylist = (event) => {
		this.setState({ 
			playlistSearchName: event.target.value,
			returnMessageList: '',
		})
	}

	searchPlaylist = async () => {
		try {
			const response = await axios.get(
				`${baseUrl}/playlists/searchPlaylist?playlistName=${this.state.playlistSearchName}`,
				{
					headers: {
						auth: myauth
					}
				}
			)

			this.setState({
				playlistSearch: response.data.result,
				playlistSearchName: '',
				appearsList: false, 
				returnMessageList: '',
			})

		} catch (error) {
			console.log(error.response)
			this.setState({ returnMessageList: '1' })
		}
	}

	limparBusca = () => {
		this.setState({ playlistSearch: [], appearsList: true})
		this.getAllPlaylists()
	}

	render() {

		let message
		if (this.state.returnMessageList) {
			if (this.state.returnMessageList === '1') {
				message = 'Não foi possível efetuar essa operação. Tente novamente mais tarde'
			}
			if (this.state.returnMessageList === '2') {
				message = 'Playlist deletada com sucesso'
			}
		}

		let lista
		if (this.state.allPlaylists.list) {
			lista = this.state.allPlaylists.list.map(playlist => (
				<S.Playlist key={playlist.id}>

					<S.Nome onClick={() => this.playlistSelected(playlist.id, playlist.name)}>
						{playlist.name}
					</S.Nome>

					<S.Icone onClick={() => this.deletePlaylist(playlist.id)}>
						<Delete />
					</S.Icone>

				</S.Playlist>
			))
		}

		let playlistSearchResult
		if (this.state.playlistSearch.quantity > 0) {
			playlistSearchResult = (
				this.state.playlistSearch.playlist.map(playlist => (
					<S.Playlist key={playlist.id}>

						<S.Nome onClick={() => this.playlistSelected(playlist.id, playlist.name)}>
							{playlist.name}
						</S.Nome>

						<S.Icone onClick={() => this.deletePlaylist(playlist.id)}>
							<Delete />
						</S.Icone>

					</S.Playlist>
				))
			)
		} else {
			playlistSearchResult = (
				<S.Resposta>
					<h4>Não há playlists com o nome pesquisado. Favor tentar novamente!</h4>
				</S.Resposta>
			)
		}

		const carregando = (
			<S.DivCarregando>
				<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
			</S.DivCarregando>
		)
		

		return (
			<S.Wrapper>

				<S.H2>Lista de Playlists</S.H2>

				<S.Div>
					<S.Input
						type='text'
						placeholder='Buscar Playlist'
						value={this.state.playlistSearchName}
						onChange={this.handleNamePlaylist}
					/>
					<S.Botao onClick={this.searchPlaylist}>Buscar</S.Botao>
					<S.Botao onClick={this.limparBusca}>Limpar Busca</S.Botao>
				</S.Div>

				<S.Qtd>
					<p>Clique na playlist para mais detalhes</p>
					<p>
						<strong>Quantidade: </strong> {this.state.appearsList ?
						this.state.allPlaylists.quantity : this.state.playlistSearch.quantity}
					</p>
				</S.Qtd>

				{this.state.allPlaylists.length === 0 && carregando}

				{this.state.appearsList ? lista : playlistSearchResult}

				<S.Resposta>
					<h4>{this.state.returnMessageList && message}</h4>
				</S.Resposta>


			</S.Wrapper>
		)
	}
}

export default TelaListaPlaylists