import React from 'react'
import './ImageButton.css'
import { PropTypes } from 'prop-types'

function ImageButton(props) {
    return (
        <div className='ImageButton'>
            <div className='imagem-ImageButton'>
                <img src={ props.imagemPostOval } alt={ props.altPostOval } />
            </div>
            
            <button id='conteudo-ImageButton'>
                <a href={ props.link } target="_blank" rel="noopener noreferrer"> { props.textoPostOval } </a>
            </button>
        </div>
    )
}

ImageButton.protoTypes = {
    imagemPostOval: PropTypes.string.isRequired,
    altPostOval: PropTypes.string.isRequired,

    textoPostOval: PropTypes.string,
    link: PropTypes.string,

}

export default ImageButton