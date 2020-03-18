import React from 'react'

import styled from 'styled-components'

import { connect } from 'react-redux'
import { createTask } from '../actions'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const GridEstilizado = styled(Grid)`
    margin-bottom: 1rem;
`

class TaskHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
    }

    inputChange = (event) => {
        this.setState({ inputText: event.target.value })
    }

    enterAddTask = (event) => {
        if (event.key === 'Enter') {
            this.props.onAddTask(this.state.inputText)
            this.setState({ inputText: '' })
        }
    }

    render() {
        return (
            <GridEstilizado container>
                <TextField
                    fullWidth
                    label="O que tem para ser feito?"
                    value={this.state.inputText}
                    onChange={this.inputChange}
                    onKeyDown={this.enterAddTask}
                />
            </GridEstilizado>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: text => dispatch(createTask(text))
    }
}

export default connect(null, mapDispatchToProps)(TaskHeader);
