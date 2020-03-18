import React from 'react'

import { connect } from 'react-redux'
import { removeTask, editTask, markTaskAsComplete } from '../actions'

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class TaskList extends React.Component {
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
		const { tasks, onDelete, onMarkTaskAsComplete } = this.props
		console.log(tasks)

		return (
			<List>
				{tasks
					.filter((task) => {
						const filter = this.props.filter
						// if(filter === 'todas') return true
						if(filter === 'pendentes') {
							return task.completed === false
						} 
						if(filter === 'completas') {
							return task.completed === true
						} 
						return true
					})
					.map(task => (
					<ListItem key={task.id} button>

						<ListItemIcon>
							<Checkbox edge="start"
								onChange={() => onMarkTaskAsComplete(task.id)} />
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
										{task.completed ? <strike>{task.text}</strike> : <span>{task.text}</span>}
								</ListItemText>
							)
						}

						<ListItemSecondaryAction>
							<IconButton edge="end" aria-label="delete"
								onClick={() => onDelete(task.id)}>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>

					</ListItem>
				))}
			</List>
		)
	}
}

const mapStateToProps = (state) => ({
	tasks: state.tasksReducer,
	filter: state.filterReducer
})

const mapDispatchToProps = dispatch => {
	return {
		onDelete: id => dispatch(removeTask(id)),
		onEditTask: (id, text) => dispatch(editTask(id, text)),
		onMarkTaskAsComplete: id => dispatch(markTaskAsComplete(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
