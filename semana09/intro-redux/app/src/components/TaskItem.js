import React from 'react'

import { connect } from 'react-redux'
import { 
    // removeTask,
    deleteTask,
    editTask,
    // markTaskAsComplete,
    doneTask,
} from '../actions'

import { TextField, ListItem, ListItemIcon, ListItemText, Checkbox, Button, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editingId: '',
            editInput: '',
            inputHere: false
        }
    }

    openEditTask = (id, text) => {
        this.setState({
            editingId: id,
            editInput: text,
            inputHere: true
        })
    }

    inputEditChange = (event) => {
        this.setState({ editInput: event.target.value })
    }

    disappearsInput = (id, input) => {
        this.props.onEditTask(id, input)
        this.setState({ inputHere: false })
    }

    render() {
        const { 
            task,
            // onDelete,
            onDeleteTask,
            // onMarkTaskAsComplete, 
            onDoneTask 
        } = this.props

        return (
            <ListItem key={task.id} button>

                <ListItemIcon>
                    <Checkbox edge="start"
                        checked={task.done}
                        // onChange={() => onMarkTaskAsComplete(task.id)}
                        onChange={() => onDoneTask(task.id)}  
                    />
                </ListItemIcon>

                {this.state.editingId === task.id && this.state.inputHere
                    ? (<>
                        <TextField id="standard-basic" label="Editar"
                            value={this.state.editInput}
                            onChange={this.inputEditChange}>
                        </TextField>
                        <ListItemIcon>
                            <Button color='primary'
                                onClick={() => this.disappearsInput(task.id, this.state.editInput)}>
                                SALVAR
							</Button>
                        </ListItemIcon>
                    </>) : (
                        <ListItemText
                            onClick={() => this.openEditTask(task.id, task.text)}>
                            {task.done ? <strike>{task.text}</strike> : <span>{task.text}</span>}
                        </ListItemText>
                    )
                }

                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete"
                        // onClick={() => onDelete(task.id)}
                        onClick={() => onDeleteTask(task.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onDelete: id => dispatch(removeTask(id)),
        onDeleteTask: id => dispatch(deleteTask(id)),

        onEditTask: (id, text) => dispatch(editTask(id, text)),


        // onMarkTaskAsComplete: id => dispatch(markTaskAsComplete(id)),
        onDoneTask: id => dispatch(doneTask(id)),
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);
