import React from 'react'
import { connect } from 'react-redux'

import { fetchTasks } from '../actions'

import TaskItem from '../components/TaskItem';

import List from '@material-ui/core/List';

class TaskList extends React.Component {
	componentDidMount() {
		this.props.onFetchTasks();
	}

	render() {

		const { tasks, filter } = this.props
		// console.log(tasks)
		// console.log(filter)
		
		return (
			<List>
				{tasks
					.filter((task) => {
						// if(filter === 'todas') return true
						if (filter === 'pendentes') {
							return task.done === false
						}
						if (filter === 'completas') {
							return task.done === true
						}
						return true
					})
					.map(task => (
						<TaskItem task={task} key={task.id}/>
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
		onFetchTasks: () => dispatch(fetchTasks()),
	};
  };

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
