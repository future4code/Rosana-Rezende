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

const authToken = "rosanarezende"; // Só para evitar repetição.

class DetalheDoUsuario extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			usuarioClicado: [],
			editar: false,
		}
	}

	componentDidMount() {
		this.buscarUsuarioClicado()
	}

	buscarUsuarioClicado = () => {

		const usuarioClicadosPromessa = axios.get(
			`${baseUrl}/users/getUser/${this.props.usuarioClicadoId}`,
			{
				headers: {
					'api-token': authToken
				}
			}
		)

		usuarioClicadosPromessa
			.then(response => {
				this.setState({ usuarioClicado: response.data.result })
			})
			.catch(error => {
				console.log(error)
				this.setState({ usuarioClicado: [] })
			})

	}

	deletaUsuario = () => {

		const deletar = window.confirm('Tem certeza de que deseja deletar?')

		if (deletar) {

			const usuarioDeletaPromessa = axios.delete(
				`${baseUrl}/users/deleteUser?id=${this.props.usuarioClicadoId}`,
				{
					headers: {
						'api-token': authToken
					}
				}
			)

			usuarioDeletaPromessa
				.then(response => {
					alert('Usuário deletado com sucesso')
					this.buscarUsuarioClicado();
				})
				.catch(error => {
					alert(error)
				})
		}

	}

	apareceEditarUsuario = () => {
		this.setState({ editar: !this.state.editar })
	}

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

					<BotaoDeletar onClick={() => this.apareceEditarUsuario(this.state.usuarioClicado.id)}>
						Editar Usuário
		 		    </BotaoDeletar>
				</DivBotoes>

			</div>
		)

		const usuarioClicadoEdicoes = (
			<div>

				<p>
					<span><strong>Nome:</strong> <input />
					</span>
				</p>

				<p>
					<span><strong>Email:</strong>  <input />
					</span>
				</p>

				<BotaoDeletar onClick={() => this.deletaUsuario(this.state.usuarioClicado.id)}>
					Deletar Usuário
		 		</BotaoDeletar>

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