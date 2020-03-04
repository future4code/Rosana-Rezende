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

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

const authToken = "rosanarezende"; // Só para evitar repetição.

const idDoUsuarioClicadoIdExemplo = 'da5d6588-9955-473b-bcc7-a8fe66768994'
// const idDoUsuarioClicado = this.props.usuarioClicadoId

class DetalheDoUsuario extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            usuarioClicado: [],
        }
    }

    componentDidMount() {
        this.buscarUsuarioClicado()
    }

    buscarUsuarioClicado = () => {

        const usuarioClicadosPromessa = axios.get(
            `${baseUrl}/users/getUser/${idDoUsuarioClicadoIdExemplo}`,
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

    render() {

        const usuarioClicadoInfo = (
            <div>

                 <p>
                     <span><em>Nome:</em> {this.state.usuarioClicado.name}</span>
                 </p>

                 <p>
                     <span><em>Email:</em>  {this.state.usuarioClicado.email}</span>
                 </p>

                 <BotaoDeletar onClick={() => this.deletaUsuario(this.state.usuarioClicado.id)}>
                     X
		 		</BotaoDeletar>

             </div>
        )



        return (
            <DetalheDoUsuarioContainer>
                <h2>Detalhe do Usuário</h2>

                {usuarioClicadoInfo}

            </DetalheDoUsuarioContainer>
        )
    }

}

export default DetalheDoUsuario