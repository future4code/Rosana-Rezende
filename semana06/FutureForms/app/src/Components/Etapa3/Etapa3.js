import React from 'react';
import styled from 'styled-components'

const Etapa3Container = styled.div`
    text-align: center;
`

class Etapa3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Etapa3Container>
                <h2>ETAPA 3</h2>

                <p>5. Porque você não terminou um curso de graduação?</p>
                <input value={this.state.graduacao} onChange={ this.props.aoMudarOInputGraduacao } type='text'></input>

                <p>6. Você fez algum curso complementar?</p>
                <select onChange={this.props.changeCursoComplementar}>
                    <option value=''></option>
                    <option value='curso'>Curso técnico</option>
                    <option value='curso'>Curso de inglês</option>
                    <option value='curso'>Não fiz curso complementar</option>
                </select>
            </Etapa3Container>
        )
    }
}
export default Etapa3
