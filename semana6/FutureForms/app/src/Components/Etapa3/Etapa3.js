import React from 'react';
import styled from 'styled-components'

const Etapa3Container = styled.div`
    text-align: center;
`

class Etapa3 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Etapa3Container>
                <h2>ETAPA 3</h2>

                <p>5. Porque você não terminou um curso de graduação?</p>
                <input type='text'></input>

                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
            </Etapa3Container>
        )
    }
}
export default Etapa3
