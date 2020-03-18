import React from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

class FilterTasks extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			tarefas: 'todas',
		}
	}

	mudaTarefa = (event, novaMarcacao) => {
		this.setState({ tarefas: novaMarcacao })
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

			</Grid>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

export default connect(null, mapDispatchToProps)(FilterTasks);
