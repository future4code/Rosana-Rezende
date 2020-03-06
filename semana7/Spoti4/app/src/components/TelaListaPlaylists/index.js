import React from 'react'

import axios from 'axios'
import * as S from './styled'

import { Delete } from '@styled-icons/material/Delete'
import { Detail } from '@styled-icons/boxicons-regular/Detail'

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'

const myauth = 'rosana'

class TelaListaPlaylists extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allPlaylists: [],
			returnMessageList: ''

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
				this.setState({ returnMessageList: '2' })
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

	render() {

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

		let message
		if (this.state.returnMessageList) {
			if (this.state.returnMessageList === '1') {
				message = 'Não foi possível efetuar essa operação. Tente novamente mais tarde'
			}
			if (this.state.returnMessageList === '2') {
				message = 'Usuário deletado com sucesso'
			}
		}

		return (
			<S.Wrapper>

				<S.H2>Lista de Playlists</S.H2>

				<S.Qtd>
					<p>Clique na playlist para mais detalhes</p>
					<p>
						<strong>Quantidade: </strong> {this.state.allPlaylists.quantity}
					</p>
				</S.Qtd>

				{lista}

				<S.Resposta>
					<h4>{this.state.returnMessageList && message}</h4>
				</S.Resposta>

			</S.Wrapper>
		)
	}
}

export default TelaListaPlaylists