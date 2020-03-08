import React from 'react'

import * as S from './styled'
import axios from 'axios'

import { BASEURL } from '../../shared/baseUrl'
import { MYAUTH } from '../../shared/myAuth'
const baseUrl = BASEURL
const myauth = MYAUTH

class TelaCadastroPlaylists extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			newName: '',
			returnMessage: ''
		}
	}

	handleChangeName = (event) => {
		this.setState({ 
			newName: event.target.value,
			returnMessage: ''
		})
	}

	createPlaylist = async () => {
		if (this.state.newName !== '') {
			const dadosNovaPlaylist = {name: this.state.newName}
			try {
				await axios.post(
					`${baseUrl}/playlists/createPlaylist`,
					dadosNovaPlaylist,
					{
						headers: {
							auth: myauth
						}
					}
				)	
				this.setState({
					newName: '',
					returnMessage: '1'
				})
	
			} catch (error) {
				this.setState({
					newName: '',
					returnMessage: '2'
				})
				console.log(error.response.data.message)
			}

		} else {
			this.setState({
				returnMessage: '3'
			})
		}
	}

	render() {

		let message
		if (this.state.returnMessage) {
			if (this.state.returnMessage === '1') {
				message = 'Playlist cadastrada com sucesso'
			}
			if (this.state.returnMessage === '2') {
				message = 'Já existe uma playlist com nome semelhante. Tente um novo nome!'
			}
			if (this.state.returnMessage === '3') {
				message = 'É necessário digitar um nome para criar uma playlist. Tente novamente!'
			}
		}

		return (
			<S.Wrapper>

				<S.H2>Cadastrar Nova Playlist</S.H2>

				<p>Nome da Playlist</p>

				<S.Input
					value={this.state.newName}
					onChange={this.handleChangeName}
				/>

				<S.Botao onClick={this.createPlaylist}>
					Cadastrar
        </S.Botao>

				<S.Resposta>
					<h4>{this.state.returnMessage && message}</h4>
				</S.Resposta>

			</S.Wrapper>
		)
	}
}

export default TelaCadastroPlaylists