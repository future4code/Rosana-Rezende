import React from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// import Button from '@material-ui/core/Button';

import { selectTaskByFilter } from '../actions'

class FilterTasks extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			tarefas: 'todas',
		}
	}

	mudaTarefa = (event, novaMarcacao) => {
		this.setState({ tarefas: novaMarcacao })
		this.props.onSelectTaskByFilter(novaMarcacao)
	}

	render() {

		return (
			<Grid item>
				<ToggleButtonGroup exclusive value={this.state.tarefas} onChange={this.mudaTarefa} aria-label="tarefas">
					<ToggleButton value="todas" aria-label="todas">
						Todas
          			</ToggleButton>
					<ToggleButton value="pendentes" aria-label="pendentes" >
						Pendentes
          			</ToggleButton>					
					<ToggleButton value="completas" aria-label="completas">
						Completas
          			</ToggleButton>
				</ToggleButtonGroup>


			{/* <Button 
				onClick={() => this.props.onSelectTaskByFilter('todas') }
				className='botao' variant="outlined" color="primary">Todas</Button>
			<Button 
				onClick={() => this.props.onSelectTaskByFilter('pendentes') }
				className='botao' variant="outlined" color="primary">Pendentes</Button>
			<Button 
				onClick={() => this.props.onSelectTaskByFilter('completas') }
				className='botao' variant="outlined" color="primary">Completas</Button> */}

			</Grid>
		);
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onSelectTaskByFilter: filter => dispatch(selectTaskByFilter(filter))
	}
}

export default connect(null, mapDispatchToProps)(FilterTasks);
