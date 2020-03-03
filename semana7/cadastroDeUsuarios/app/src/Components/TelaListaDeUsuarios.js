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
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

const authToken = "rosanarezende"; // Só para evitar repetição.

class TelaListaDeUsuarios extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todosOsUsuarios: [],
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
                console.log(error)
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
        return (
            <TelaListaDeUsuariosContainer>
                <H2>Lista de Usuários</H2>

                {this.state.todosOsUsuarios.length === 0 && <p>Carregando...</p>}

                <ul>
                    {this.state.todosOsUsuarios.map(usuario => (
                        <LI key={usuario.id}>
                            <span>{usuario.name}   </span>
                            <BotaoDeletar
                                onClick={() => this.deletaUsuario(usuario.id)}
                            >
                                X
                            </BotaoDeletar>
                        </LI>
                    ))}
                </ul>

            </TelaListaDeUsuariosContainer>
        );
    }
}

export default TelaListaDeUsuarios;