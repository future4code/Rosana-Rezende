import React from 'react';
import styled from 'styled-components'

const Etapa2Container = styled.div`
    text-align: center;
`

class Etapa2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Etapa2Container>
                <h2>ETAPA 2</h2>

                <p>5. Qual curso?</p>
                <input type='text'></input>

                <p>6. Qual a unidade de ensino?</p>
                <input type='text'></input>
            </Etapa2Container>
        )
    }
}
export default Etapa2
