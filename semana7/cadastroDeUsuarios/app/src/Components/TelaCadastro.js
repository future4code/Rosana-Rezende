import React, { Component } from "react"

import styled from "styled-components"
import axios from "axios"

const TelaCadastroContainer = styled.div`
  padding: 1vh 1vw;
  text-align: center;
`

const H2 = styled.h2``

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

const authToken = "string"; // Só para evitar repetição.

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

    cadastraUsuario = () => {

        const dadosNovoUsuario = {
            name: this.state.nome,
            email: this.state.email
        }

        const usuarioPromessa = axios.post(
            `${baseUrl}/users/createUser`,
            dadosNovoUsuario,
            {
                headers: {
                    'api-token': authToken
                }
            }
        )

        usuarioPromessa
            .then(response => {
                alert('Usuário cadastrado com sucesso')
                this.setState({ nome: '' })
                this.setState({ email: '' })
            })
            .catch(error => {
                alert(error)
            })

    }

    render() {
        return (
            <TelaCadastroContainer>

                <H2>Cadastro de Usuários</H2>
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

                <button onClick={this.cadastraUsuario}>
                    Cadastrar o Usuário
                </button>

            </TelaCadastroContainer>
        )
    }
}

export default TelaCadastro
