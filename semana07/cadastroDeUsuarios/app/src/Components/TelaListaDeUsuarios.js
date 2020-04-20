import React, { Component } from 'react';

import styled from 'styled-components'
import axios from 'axios'

const TelaListaDeUsuariosContainer = styled.div`
	padding: 1vh 1vw;
`

const H2 = styled.h2`
	text-align: center;
`

const LI = styled.li`
	padding: 1vh 0;
	width: 30vw;
	display: flex;
	justify-content: space-between;
	margin: auto;
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

const BotaoBusca = styled.button`
  border-radius: 50px;
  outline: 0;
  font-family: 'Roboto', sans-serif;
  padding: 5px 10px;
  background-color: black;
  color: white;
  font-size: 1rem;
`

const InputBusca = styled.input`
	margin: 1vh 1vw;
	outline: 0;
`

const DivResultado = styled.div`
	width: 50vh;
	margin: auto;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

const authToken = "rosanarezende";

class TelaListaDeUsuarios extends Component {

	constructor(props) {
		super(props)
		this.state = {
			todosOsUsuarios: [],
			apareceLista: true,
			usuarioPesquisadoNome: '',
			usuarioPesquisado: []
		}
	}

	componentDidMount() {
		this.buscarTodosOsUsuarios()
	}

	// buscarTodosOsUsuarios = () => {

	// 	const todosOsUsuariosPromessa = axios.get(
	// 		`${baseUrl}/users/getAllUsers`,
	// 		{
	// 			headers: {
	// 				'api-token': authToken
	// 			}
	// 		}
	// 	)

	// 	todosOsUsuariosPromessa
	// 		.then(response => {
	// 			this.setState({ todosOsUsuarios: response.data.result })
	// 		})
	// 		.catch(error => {
	// 			console.log(error.response.data.message)
	// 			this.setState({ todosOsUsuarios: [] })
	// 		})

	// }

	buscarTodosOsUsuarios = async () => {

		try {
			const response = await axios.get(
				`${baseUrl}/users/getAllUsers`,
				{
					headers: {
						'api-token': authToken
					}
				}
			)

			this.setState({ todosOsUsuarios: response.data.result })
		} catch (error) {
			console.log(error.response.data.message)
			this.setState({ todosOsUsuarios: [] })
		}

	}

	// deletaUsuario = (idDoUsuario) => {

	// 	const deletar = window.confirm('Tem certeza de que deseja deletar?')

	// 	if (deletar) {

	// 		const usuarioDeletaPromessa = axios.delete(
	// 			`${baseUrl}/users/deleteUser?id=${idDoUsuario}`,
	// 			{
	// 				headers: {
	// 					'api-token': authToken
	// 				}
	// 			}
	// 		)

	// 		usuarioDeletaPromessa
	// 			.then(response => {
	// 				alert('Usuário deletado com sucesso')
	// 				this.buscarTodosOsUsuarios();
	// 			})
	// 			.catch(error => {
	// 				alert(error)
	// 			})
	// 	}

	// }

	deletaUsuario = async (idDoUsuario) => {

		const deletar = window.confirm('Tem certeza de que deseja deletar?')

		if (deletar) {

			try {
				await axios.delete(
					`${baseUrl}/users/deleteUser?id=${idDoUsuario}`,
					{
						headers: {
							'api-token': authToken
						}
					}
				)

				alert('Usuário deletado com sucesso')
				this.buscarTodosOsUsuarios()

			} catch (error) {
				alert(error)
			}

		}

	}

	mostraDetalheDoUsuario = (idDoUsuario) => {
		this.props.aoClicarNoUsuario(idDoUsuario)
	}

	mudaNomeUsuarioPesquisado = (event) => {
		this.setState({ usuarioPesquisadoNome: event.target.value })
	}

	// buscaUsuarioNome = () => {

	// 	const usuarioPesquisadoPromessa = axios.get(
	// 		`${baseUrl}/users/searchUsers?name=${this.state.usuarioPesquisadoNome}`,
	// 		{
	// 			headers: {
	// 				'api-token': authToken
	// 			}
	// 		}
	// 	)

	// 	usuarioPesquisadoPromessa
	// 		.then(response => {
	// 			this.setState({ 
	// 				usuarioPesquisado: response.data.result,
	// 				apareceLista: false,
	// 				usuarioPesquisadoNome: ''
	// 			})
	// 			// if (response.data.results[0].length === 0) {
	// 			// 	alert('Erro')
	// 			// }				
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		})

	// }

	buscaUsuarioNome = async () => {

		try {
			let response = await axios.get(
				`${baseUrl}/users/searchUsers?name=${this.state.usuarioPesquisadoNome}`,
				{
					headers: {
						'api-token': authToken
					}
				}
			)

			this.setState({
				usuarioPesquisado: response.data.result,
				apareceLista: false,
				usuarioPesquisadoNome: ''
			})
		} catch (error) {
			console.log(error)
		}

	}

	render() {
		
		const listaDeUsuarios = (
			<div>
				<H2>Lista de Usuários</H2>
				<ul>
					{this.state.todosOsUsuarios.map(usuario => (
						<LI key={usuario.id}>
							<span onClick={() => this.mostraDetalheDoUsuario(usuario.id)}>{usuario.name}  </span>
							<BotaoDeletar
								onClick={() => this.deletaUsuario(usuario.id)}
							>
								X
						</BotaoDeletar>
						</LI>
					))}
				</ul>
			</div>
		)

		let usuarioPesquisadoNaTela
		if (this.state.usuarioPesquisado.length > 0) {
			usuarioPesquisadoNaTela = (
				<DivResultado>
					<H2>Resultado da Busca</H2>
					<p>
						<span><strong>Nome:</strong>  {this.state.usuarioPesquisado[0].name}</span>
					</p>
					<p>
						<span><strong>Id:</strong>   {this.state.usuarioPesquisado[0].id}</span>
					</p>
				</DivResultado>
			)
		} else {
			usuarioPesquisadoNaTela = (
				<DivResultado>
					<H2>Não foi encontrado resultado</H2>
				</DivResultado>
			)
		}

		return (
			<TelaListaDeUsuariosContainer>

				<InputBusca
					type='text'
					placeholder='Buscar Usuário'
					value={this.state.usuarioPesquisadoNome}
					onChange={this.mudaNomeUsuarioPesquisado}
				/>
				<BotaoBusca onClick={this.buscaUsuarioNome}>Buscar</BotaoBusca>

				{this.state.todosOsUsuarios.length === 0 && <p>Carregando...</p>}

				{this.state.apareceLista ? listaDeUsuarios : usuarioPesquisadoNaTela}

			</TelaListaDeUsuariosContainer>
		);
	}
}

export default TelaListaDeUsuarios;