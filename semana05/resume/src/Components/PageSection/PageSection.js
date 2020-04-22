import React from 'react'
import './PageSection.css'
import { PropTypes } from 'prop-types'

function PageSection(props) {
    return (
        <div className='PageSection'>
            <h2> { props.titulo } </h2>
            { props.children }
        </div>
    )
}

PageSection.protoTypes = {
    titulo: PropTypes.string.isRequired,
}

export default PageSection