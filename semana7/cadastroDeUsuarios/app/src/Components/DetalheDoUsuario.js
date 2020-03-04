import React from 'react';

import styled from 'styled-components'
// import axios from 'axios'

const DetalheDoUsuarioContainer = styled.div`
    padding: 1vh 1vw;
    text-align: center;
`

function DetalheDoUsuario() {

    // const usuarioClicadoId = this.props.usuarioClicadoId
    
    return (
        <DetalheDoUsuarioContainer>
            <h2>Detalhe do Usuário</h2>
            
            <p>
                <span><em>Nome:</em> x</span>
            </p>

            <p>
                <span><em>Email:</em>  x</span>
            </p>

            <button>Deletar Usuario</button>
            

        </DetalheDoUsuarioContainer>
    )

}

export default DetalheDoUsuario