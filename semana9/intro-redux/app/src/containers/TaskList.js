import React from 'react'
import { connect } from 'react-redux'

import TaskItem from '../components/TaskItem';

import List from '@material-ui/core/List';

function TaskList(props) {
	const { tasks, filter } = props
	// console.log(tasks)
	// console.log(filter)

	return (
		<List>
			{tasks
				.filter((task) => {
					// if(filter === 'todas') return true
					if (filter === 'pendentes') {
						return task.completed === false
					}
					if (filter === 'completas') {
						return task.completed === true
					}
					return true
				})
				.map(task => (
					<TaskItem task={task} />
				))}
		</List>
	)
}

const mapStateToProps = (state) => ({
	tasks: state.tasksReducer,
	filter: state.filterReducer
})

export default connect(mapStateToProps)(TaskList);
