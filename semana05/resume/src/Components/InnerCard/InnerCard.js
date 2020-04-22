import React from 'react'
import './InnerCard.css'
import { PropTypes } from 'prop-types'

function InnerCard(props) {
    return (
        <div className='InnerCard'>
            <h3>{ props.titulo2 } </h3>
            { props.children }
        </div>
    )
}

InnerCard.protoTypes = {
    titulo2: PropTypes.string.isRequired,
}

export default InnerCard