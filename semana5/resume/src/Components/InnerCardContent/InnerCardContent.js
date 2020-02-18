import React from 'react'
import './InnerCardContent.css'
import { PropTypes } from 'prop-types'

function InnerCardContent(props) {
    return (
        <div className='InnerCardContent'>
            <strong> { props.subtitulo } </strong>
            (<a href={ props.link } target="_blank" rel="noopener noreferrer"><span>{ props.linkExterno}</span></a>)
            <p> { props.texto } </p>
            <p> { props.texto2 } </p>
        </div>
    )
}

InnerCardContent.protoTypes = {
    link: PropTypes.string,
    linkExterno: PropTypes.string,
    subtitulo: PropTypes.string,
    texto: PropTypes.string,
    texto2: PropTypes.string,
}

export default InnerCardContent