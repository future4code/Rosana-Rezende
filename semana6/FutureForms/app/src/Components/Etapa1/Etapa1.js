import React from 'react';
import styled from 'styled-components'

const Etapa1Container = styled.div`
    text-align: center;
`

class Etapa1 extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <Etapa1Container>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
    
                <p>1. Qual o seu nome?</p>
                <input value={this.state.nome} onChange={ this.props.aoMudarOInputNome } type='text'></input>
    
                <p>2. Qual sua idade?</p>
                <input value={this.state.idade} onChange={ this.props.aoMudarOInputIdade } type='text'></input>
    
                <p>3. Qual seu email?</p>
                <input value={this.state.email} onChange={ this.props.aoMudarOInputEmail } type='text'></input>

                <p>4. Qual sua escolaridade?</p>
                <select onChange={this.props.changeEscolaridade} required>
                    <option value=''></option>
                    <option value='medio'>Ensino médio incompleto</option>
                    <option value='medio'>Ensino médio completo</option>
                    <option value='superior'>Ensino superior incompleto</option>
                    <option value='superior'>Ensino superior completo</option>
                </select>
            </Etapa1Container>
        )
    }
    
    
}

export default Etapa1
