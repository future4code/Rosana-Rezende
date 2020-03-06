import React, { Component } from "react"

import styled from "styled-components"
import axios from "axios"

const TelaCadastroContainer = styled.div`
  padding: 1vh 1vw;
  text-align: center;
`

const BotaoCadastrar = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    border-radius: 50px;
    outline: 0;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

const authToken = "rosanarezende";

class TelaCadastro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: "",
			email: ""
		}
	}

	mudaNome = (event) => {
		this.setState({ nome: event.target.value })
	}

	mudaEmail = (event) => {
		this.setState({ email: event.target.value })
	}

	// cadastraUsuario = () => {

	//     const dadosNovoUsuario = {
	//         name: this.state.nome,
	//         email: this.state.email
	//     }

	//     const usuarioPromessa = axios.post(
	//         `${baseUrl}/users/createUser`,
	//         dadosNovoUsuario,
	//         {
	//             headers: {
	//                 'api-token': authToken
	//             }
	//         }
	//     )

	//     usuarioPromessa
	//         .then(response => {
	//             alert('Usuário cadastrado com sucesso')
	//             this.setState({ nome: '' })
	//             this.setState({ email: '' })
	//         })
	//         .catch(error => {
	//             alert("Ops, algo deu errado na criação do usuário.")
	//             console.log(error.response)
	//         })

	// }

	cadastraUsuario = async () => {

		const dadosNovoUsuario = {
			name: this.state.nome,
			email: this.state.email
		}

		try {

			await axios.post(
				`${baseUrl}/users/createUser`,
				dadosNovoUsuario,
				{
					headers: {
						'api-token': authToken
					}
				}
			)

			alert('Usuário cadastrado com sucesso')
			this.setState({
				nome: '',
				email: ''
			})

		} catch (error) {
			alert("Ops, algo deu errado na criação do usuário.")
			console.log(error.response)
			this.setState({
				nome: '',
				email: ''
			})
		}

	}

	render() {
		return (
			<TelaCadastroContainer>

				<h2>Cadastro de Usuários</h2>
				<p>
					<input
						type="text"
						placeholder="Nome"
						value={this.state.nome}
						onChange={this.mudaNome}
					/>
				</p>

				<p>
					<input
						type="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.mudaEmail}
					/>
				</p>

				<BotaoCadastrar onClick={this.cadastraUsuario}>
					Cadastrar Usuário
        </BotaoCadastrar>

			</TelaCadastroContainer>
		)
	}
}

export default TelaCadastro
