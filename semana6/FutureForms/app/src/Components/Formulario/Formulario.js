import React from 'react';
import styled from 'styled-components'

import Etapa1 from '../Etapa1/Etapa1';
import Etapa2 from '../Etapa2/Etapa2';
import Etapa3 from '../Etapa3/Etapa3';
import EtapaFinal from '../EtapaFinal/EtapaFinal';

const FormularioContainer = styled.div`
    text-align: center;
`

const Botao = styled.button`
    display: flex;
    margin: 3vh auto;
    padding: 1vh 1vw;
    border-radius: 25px;
    outline: 0;
`

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            etapaAtual: 0,

            // Etapa 1
            escolaridade: '',
            nome: '',
            idade: '',
            email: '',

            // Etapa 2
            curso: '',
            unidade: '',

            // Etapa 3
            cursoComplementar: '',
            graduacao: '',
        }
    }

    naEtapa1 = () => {
        const novaEtapa = this.state.etapaAtual + 1
        if (
            (this.state.nome === '') ||
            (this.state.idade === '') ||
            (this.state.email === '') ||
            (this.state.escolaridade === '')
        ) {
            alert('Você deve preencher todas as perguntas da ETAPA 1 antes de continuar')
        } else {
            this.setState({
                etapaAtual: novaEtapa
            })
        }
    }

    naEtapa2 = () => {
        const novaEtapa = this.state.etapaAtual + 1
        if (
            (this.state.curso === '') ||
            (this.state.unidade === '')
        ) {
            alert('Você deve preencher todas as perguntas da ETAPA 2 antes de continuar')
        } else {
            this.setState({
                etapaAtual: novaEtapa
            })
        }
    }

    naEtapa3 = () => {
        const novaEtapa = this.state.etapaAtual + 1
        if (
            (this.state.cursoComplementar === '') ||
            (this.state.graduacao === '')
        ) {
            alert('Você deve preencher todas as perguntas da ETAPA 3 antes de continuar')
        } else {
            this.setState({
                etapaAtual: novaEtapa
            })
        }
    }

    // Etapa 1

    changeEscolaridade = (event) => {
        this.setState({
            escolaridade: event.target.value
        })
    }

    aoMudarOInputNome = (event) => {
        this.setState({
            nome: event.target.value
        })
    }

    aoMudarOInputIdade = (event) => {
        this.setState({
            idade: event.target.value
        })
    }

    aoMudarOInputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    // Etapa 2

    aoMudarOInputCurso = (event) => {
        this.setState({
            curso: event.target.value
        })
    }

    aoMudarOInputUnidade = (event) => {
        this.setState({
            unidade: event.target.value
        })
    }

    // Etapa 3

    changeCursoComplementar = (event) => {
        this.setState({
            cursoComplementar: event.target.value
        })
    }

    aoMudarOInputGraduacao  = (event) => {
        this.setState({
            graduacao: event.target.value
        })
    }



    render() {


        let etapa

        if (this.state.etapaAtual === 0) {
            etapa = (
                <FormularioContainer>
                    <Etapa1
                        aoMudarOInputNome={this.aoMudarOInputNome}
                        aoMudarOInputIdade={this.aoMudarOInputIdade}
                        aoMudarOInputEmail={this.aoMudarOInputEmail}
                        changeEscolaridade={this.changeEscolaridade}
                    />
                    <Botao onClick={this.naEtapa1}>Próxima etapa</Botao>
                </FormularioContainer>
            )

        } else if (this.state.etapaAtual === 1) {

            if (this.state.escolaridade === 'superior') {
                etapa = (
                    <FormularioContainer>
                        <Etapa2
                            aoMudarOInputCurso={this.aoMudarOInputCurso}
                            aoMudarOInputUnidade={this.aoMudarOInputUnidade}
                        />
                        <Botao onClick={this.naEtapa2}>Próxima etapa</Botao>
                    </FormularioContainer>
                )
            }

            else if (this.state.escolaridade === 'medio') {
                etapa = (
                    <FormularioContainer>
                        <Etapa3
                            aoMudarOInputGraduacao ={this.aoMudarOInputGraduacao}
                            changeCursoComplementar={this.changeCursoComplementar}
                        />
                        <Botao onClick={this.naEtapa3}>Próxima etapa</Botao>
                    </FormularioContainer>
                )
            }

        } else if (this.state.etapaAtual === 2) {
            etapa = (
                <FormularioContainer>
                    <EtapaFinal />
                </FormularioContainer>
            )
        }

        return etapa

    }
}

export default Formulario;
