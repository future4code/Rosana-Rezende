import React from 'react'
import './SmallCard.css'
import { PropTypes } from 'prop-types'

function SmallCard(props) {
    return (
        <div className='SmallCard'>
            <div>
                <img src={ props.imagem } alt={ props.alt } />
            </div>
            
            <div id='conteudo-SmallCard'>
                <label><strong> { props.subtitulo } </strong></label>
                { props.texto }
            </div>
        </div>
    )
}

SmallCard.protoTypes = {
    imagem: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
    texto: PropTypes.string,
}

export default SmallCard
