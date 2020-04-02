import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import { Typography, CardContent } from '@material-ui/core'

import { CardCandidate, DivCandidates, DivCenter, styles } from './styles'

class Approved extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const { trip } = this.props

		return (
			<>
				{trip.approved && trip.approved.length > 0 ?
					(<>
						<Typography component="p" variant="h6" color="inherit">
							<strong>Aprovados:</strong>
						</Typography>
						<DivCandidates>
							{trip.approved.map(candidate => (
								<CardCandidate key={candidate.id}>
									<DivCenter>
										<Typography variant="h5">{candidate.name}</Typography>
									</DivCenter>
									<CardContent>
										<Typography><strong>Idade: </strong>{candidate.age} anos</Typography>
										<Typography><strong>Profissão: </strong>{candidate.profession}</Typography>
										<Typography><strong>País: </strong>{candidate.country}</Typography>
										<Typography><strong>Texto de aplicação: </strong>{candidate.applicationText}</Typography>
									</CardContent>
								</CardCandidate>
							))}
						</DivCandidates>
					</>)
					:
					(<Typography component="p" variant="h6" color="inherit">
						<strong>Aprovados: </strong> Não há aprovados para essa viagem!
					</Typography>)
				}
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	trip: state.trips.tripDetail,
})

export default connect(mapStateToProps)(withStyles(styles)(Approved));
