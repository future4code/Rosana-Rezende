import React from 'react'

import { connect } from 'react-redux'
import { addTask } from '../actions'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
            <Grid container className='topo'>
                <TextField
                    fullWidth
                    label="O que tem para ser feito?"
                    value={this.state.inputText}
                    onChange={this.inputChange}
                    onKeyDown={this.enterAddTask}
                />
            </Grid>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddTask: text => dispatch(addTask(text))
    }
}

export default connect(null, mapDispatchToProps)(TaskHeader);
