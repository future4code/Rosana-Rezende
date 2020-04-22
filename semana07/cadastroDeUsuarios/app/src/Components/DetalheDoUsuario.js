import React from 'react';

import styled from 'styled-components'
import axios from 'axios'

const DetalheDoUsuarioContainer = styled.div`
    padding: 1vh 1vw;
    text-align: center;
`

const BotaoDeletar = styled.button`
	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
	border-radius: 50px;
	outline: 0;
	padding: 5px 10px;
	background-color: red;
	color: black;
`

const BotaoComum = styled.button`
	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
	border-radius: 50px;
	outline: 0;
	padding: 5px 10px;
	background-color: rgba(0, 0, 0, 0.9);
	color: white;
`

const DivBotoes = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40vw;
    margin: auto;

`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

const authToken = "rosanarezende";

class DetalheDoUsuario extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			usuarioClicado: {},
			editar: false,
			novoNome: '',
			novoEmail: ''
		}
	}

	componentDidMount() {
		this.buscarUsuarioClicado()
	}

	// buscarUsuarioClicado = () => {

	// 	const usuarioClicadosPromessa = axios.get(
	// 		`${baseUrl}/users/getUser/${this.props.usuarioClicadoId}`,
	// 		{
	// 			headers: {
	// 				'api-token': authToken
	// 			}
	// 		}
	// 	)

	// 	usuarioClicadosPromessa
	// 		.then(response => {
	// 			this.setState({ usuarioClicado: response.data.result })
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 			this.setState({ usuarioClicado: {} })
	// 		})

	// }

	buscarUsuarioClicado = async () => {

		try {

			const response = await axios.get(
				`${baseUrl}/users/getUser/${this.props.usuarioClicadoId}`,
				{
					headers: {
						'api-token': authToken
					}
				}
			)

			this.setState({ usuarioClicado: response.data.result })

		} catch (error) {
			console.log(error)
			this.setState({ usuarioClicado: {} })
		}
	}

	// deletaUsuario = () => {

	// 	const deletar = window.confirm('Tem certeza de que deseja deletar?')

	// 	if (deletar) {

	// 		const usuarioDeletaPromessa = axios.delete(
	// 			`${baseUrl}/users/deleteUser?id=${this.props.usuarioClicadoId}`,
	// 			{
	// 				headers: {
	// 					'api-token': authToken
	// 				}
	// 			}
	// 		)

	// 		usuarioDeletaPromessa
	// 			.then(response => {
	// 				alert('Usuário deletado com sucesso')
	// 				this.buscarUsuarioClicado();
	// 			})
	// 			.catch(error => {
	// 				alert(error)
	// 			})
	// 	}

	// }

	deletaUsuario = async () => {

		const deletar = window.confirm('Tem certeza de que deseja deletar?')

		if (deletar) {

			try {

				await axios.delete(
					`${baseUrl}/users/deleteUser?id=${this.props.usuarioClicadoId}`,
					{
						headers: {
							'api-token': authToken
						}
					}
				)

				alert('Usuário deletado com sucesso')
				this.buscarUsuarioClicado();

			} catch (error) {
				alert(error)
			}
		}

	}

	apareceEditarUsuario = () => {
		this.setState({ editar: !this.state.editar })
	}

	mudaNome = (event) => {
		this.setState({ novoNome: event.target.value })
	}

	mudaEmail = (event) => {
		this.setState({ novoEmail: event.target.value })
	}

	salvaUsuario = () => {

		let dadosNovoUsuario
		if (this.state.novoNome === '' && this.state.novoEmail === '') {
			dadosNovoUsuario = {
				user: {
					id: this.state.usuarioClicado.id,
					name: this.state.usuarioClicado.name,
					email: this.state.usuarioClicado.email
				}
			}
		}
		else if (this.state.novoNome === '') {
			dadosNovoUsuario = {
				user: {
					id: this.state.usuarioClicado.id,
					name: this.state.usuarioClicado.name,
					email: this.state.novoEmail
				}
			}
		} 
		else if (this.state.novoEmail === '') {
			dadosNovoUsuario = {
				user: {
					id: this.state.usuarioClicado.id,
					name: this.state.novoNome,
					email: this.state.usuarioClicado.email
				}
			}
		} 
		else {
			dadosNovoUsuario = {
				user: {
					id: this.state.usuarioClicado.id,
					name: this.state.novoNome,
					email: this.state.novoEmail
				}
			}
		}

		const usuarioPromessa = axios.put(
			`${baseUrl}/users/editUser`,
			dadosNovoUsuario,
			{
				headers: {
					'api-token': authToken
				}
			}
		)

		usuarioPromessa
			.then(response => {
				alert('Usuário editado com sucesso')
				this.setState({
					novoNome: '',
					novoEmail: '',
					editar: false
				})
				this.buscarUsuarioClicado();
			})
			.catch(error => {
				alert("Ops, algo deu errado na edição do usuário.")
				console.log(error)
			})

	}

	// salvaUsuario = async () => {

	// 	const dadosNovoUsuario = {
	// 		user: {
	// 			id: this.state.usuarioClicado.id,
	// 			name: this.state.novoNome,
	// 			email: this.state.novoEmail
	// 		}
	// 	}

	// 	try {

	// 		await axios.put(
	// 			`${baseUrl}/users/editUser`,
	// 			dadosNovoUsuario,
	// 			{
	// 				headers: {
	// 					'api-token': authToken
	// 				}
	// 			}
	// 		)

	// 		alert('Usuário editado com sucesso')
	// 		this.setState({
	// 			novoNome: '',
	// 			novoEmail: '',
	// 			editar: false
	// 		})
	// 		this.buscarUsuarioClicado();

	// 	} catch (error) {
	// 		alert("Ops, algo deu errado na edição do usuário.")
	// 		console.log(error)
	// 	}

	// }

	render() {

		const usuarioClicadoInfo = (
			<div>

				<p>
					<span><strong>Nome:</strong> {this.state.usuarioClicado.name}</span>
				</p>

				<p>
					<span><strong>Email:</strong>  {this.state.usuarioClicado.email}</span>
				</p>

				<DivBotoes>
					<BotaoDeletar onClick={() => this.deletaUsuario(this.state.usuarioClicado.id)}>
						Deletar Usuário
		 		  </BotaoDeletar>

					<BotaoComum onClick={() => this.apareceEditarUsuario(this.state.usuarioClicado.id)}>
						Editar Usuário
		 		    </BotaoComum>
				</DivBotoes>

			</div>
		)

		const usuarioClicadoEdicoes = (
			<div>

				<p>
					<span><strong>Nome:</strong> <input
						type="text"
						placeholder={this.state.usuarioClicado.name}
						value={this.state.novoNome}
						onChange={this.mudaNome}
					/>
					</span>
				</p>

				<p>
					<span><strong>Email:</strong>  <input
						type="email"
						placeholder={this.state.usuarioClicado.email}
						value={this.state.novoEmail}
						onChange={this.mudaEmail}
					/>
					</span>
				</p>

				<DivBotoes>

					<BotaoDeletar onClick={() => this.deletaUsuario(this.state.usuarioClicado.id)}>
						Deletar Usuário
		 		  </BotaoDeletar>

					<BotaoComum onClick={() => this.salvaUsuario(this.state.usuarioClicado.id)}>
						Salvar Usuário
		 		  </BotaoComum>
				</DivBotoes>

			</div>
		)

		return (
			<DetalheDoUsuarioContainer>
				<h2>Detalhe do Usuário</h2>

				{this.state.editar ? usuarioClicadoEdicoes : usuarioClicadoInfo}

			</DetalheDoUsuarioContainer>
		)
	}

}

export default DetalheDoUsuario