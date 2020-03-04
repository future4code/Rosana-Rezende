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

const InputBusca = styled.input`
	margin: 1vh 1vw;
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

	buscarTodosOsUsuarios = () => {

		const todosOsUsuariosPromessa = axios.get(
			`${baseUrl}/users/getAllUsers`,
			{
				headers: {
					'api-token': authToken
				}
			}
		)

		todosOsUsuariosPromessa
			.then(response => {
				this.setState({ todosOsUsuarios: response.data.result })
			})
			.catch(error => {
				console.log(error.response.data.message)
				this.setState({ todosOsUsuarios: [] })
			})

	}

	deletaUsuario = (idDoUsuario) => {

		const deletar = window.confirm('Tem certeza de que deseja deletar?')

		if (deletar) {

			const usuarioDeletaPromessa = axios.delete(
				`${baseUrl}/users/deleteUser?id=${idDoUsuario}`,
				{
					headers: {
						'api-token': authToken
					}
				}
			)

			usuarioDeletaPromessa
				.then(response => {
					alert('Usuário deletado com sucesso')
					this.buscarTodosOsUsuarios();
				})
				.catch(error => {
					alert(error)
				})
		}

	}

	mostraDetalheDoUsuario = (idDoUsuario) => {
		this.props.aoClicarNoUsuario(idDoUsuario)
	}

	mudaNomeUsuarioPesquisado = (event) => {
		this.setState({usuarioPesquisadoNome: event.target.value})
	}

	buscaUsuarioNome = () => {

		const usuarioPesquisadoPromessa = axios.get(
			`${baseUrl}/users/searchUsers?name=${this.state.usuarioPesquisadoNome}`,
			{
				headers: {
					'api-token': authToken
				}
			}
		)

		usuarioPesquisadoPromessa
			.then(response => {
				this.setState({ 
					usuarioPesquisado: response.data.result[0],
					apareceLista: false,
					usuarioPesquisadoNome: ''
				})
			})
			.catch(error => {
				console.log(error)
				this.setState({ usuarioPesquisado: [] })
			})

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
		
		const usuarioPesquisadoNaTela = (
			<DivResultado>
				<H2>Resultado da Busca</H2>
				<p>
					<span><strong>Nome:</strong>  {this.state.usuarioPesquisado.name}</span>
				</p>
				<p>
					<span><strong>Id:</strong>   {this.state.usuarioPesquisado.id}</span>
				</p>
			</DivResultado>
		)


		return (
			<TelaListaDeUsuariosContainer>
				
				<InputBusca
					type='text'
					placeholder='Buscar Usuário'
					value={this.state.usuarioPesquisadoNome}
					onChange={this.mudaNomeUsuarioPesquisado}
				/>
				<button onClick={this.buscaUsuarioNome}>Buscar</button>


				{this.state.todosOsUsuarios.length === 0 && <p>Carregando...</p>}

				{this.state.apareceLista ? listaDeUsuarios : usuarioPesquisadoNaTela}

			</TelaListaDeUsuariosContainer>
		);
	}
}

export default TelaListaDeUsuarios;