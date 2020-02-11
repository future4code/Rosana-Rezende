import React from 'react'
import './BigCard.css'
import { PropTypes } from 'prop-types'

function BigCard(props) {
    return (
        <div className='BigCard'>
            
            <div id='imagem-BigCard'>
                <img src={ props.imagem } alt={ props.alt } />
            </div>
            
            <div id='conteudo-BigCard'>
                <h4> { props.subtitulo } </h4>
                <p> { props.texto } </p>
                <p> { props.texto2 } </p>
            </div>
        </div>
    )
}

BigCard.protoTypes = {
    imagem: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
    texto: PropTypes.string,
    texto2: PropTypes.string,
}

export default BigCard