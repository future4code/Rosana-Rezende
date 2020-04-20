import React from 'react';
import styled from 'styled-components'

const EtapaFinalContainer = styled.div`
    text-align: center;
`

class EtapaFinal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <EtapaFinalContainer>
                <h2>O FORMULÁRIO ACABOU</h2>

                <p>Muito obrigado por participar!</p>
                <p>Entraremos em contato!</p>
            </EtapaFinalContainer>
        )
    }
}
export default EtapaFinal
