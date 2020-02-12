import React from 'react'
import './ImageButton.css'
import { PropTypes } from 'prop-types'

function ImageButton(props) {
    return (
        <div className='ImageButton'>
                      
            <a href={ props.link } target="_blank" rel="noopener noreferrer">
                <button id='conteudo-ImageButton'>
                    <img src={ props.imagemPostOval } alt={ props.altPostOval } />
                    <span> { props.textoPostOval } </span>
                </button>
            </a>

        </div>
    )
}

ImageButton.protoTypes = {
    imagemPostOval: PropTypes.string.isRequired,
    altPostOval: PropTypes.string,
    textoPostOval: PropTypes.string.isRequired,
    link: PropTypes.string,
}

export default ImageButton