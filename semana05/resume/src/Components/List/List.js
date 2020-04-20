import React from 'react'
import './List.css'
import { PropTypes } from 'prop-types'

function List(props) {
    return (
        <div className='List'>

            <ul>
                <li>{ props.texto }</li>
            </ul>

        </div>
    )
}

List.protoTypes = {
    texto: PropTypes.string,
    titulo: PropTypes.string,
}

export default List