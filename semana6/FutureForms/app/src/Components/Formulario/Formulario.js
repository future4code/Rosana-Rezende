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
`

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            etapaAtual: 0,
        }
    }

    proximaEtapa = () => {
        const novaEtapa = this.state.etapaAtual + 1
        this.setState({
            etapaAtual: novaEtapa
        })
    }


    render() {

        let etapa
        
        if (this.state.etapaAtual === 0) {
            etapa = (
                <FormularioContainer>
                    <Etapa1/>
                    <Botao onClick={this.proximaEtapa}>Próxima etapa</Botao>
                </FormularioContainer>
            )
        } else if (this.state.etapaAtual === 1) {
            etapa = (
                <FormularioContainer>
                    <Etapa2/>
                    <Botao onClick={this.proximaEtapa}>Próxima etapa</Botao>
                </FormularioContainer>
            )
        } else if (this.state.etapaAtual === 2) {
            etapa = (
                <FormularioContainer>
                    <Etapa3/>
                    <Botao onClick={this.proximaEtapa}>Próxima etapa</Botao>
                </FormularioContainer>
            )
        } else {
            etapa = (
                <FormularioContainer>
                    <EtapaFinal/>
                </FormularioContainer>
            )
        }

        return etapa

    }
}

export default Formulario;
