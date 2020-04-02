import React, { Component } from "react";
import { connect } from "react-redux";

import { decideCandidate } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, CardContent } from '@material-ui/core'

import { CardCandidate, DivCandidates, DivCenter, styles } from './styles'

class Candidates extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const { trip, decideCandidate } = this.props

		return (
			<>
				{trip.candidates && trip.candidates.length > 0
					?
					(<>
						<Typography component="p" variant="h6" color="inherit">
							<strong>Candidatos:</strong>
						</Typography>
						<DivCandidates>
							{trip.candidates.map(candidate => (
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
									<DivCenter>
										<Button color="primary"
											onClick={() => decideCandidate(trip.id, candidate.id)}>
											Aprovar
                      </Button>
									</DivCenter>
								</CardCandidate>
							))}
						</DivCandidates>
					</>)
					:
					(<Typography component="p" variant="h6" color="inherit">
						<strong>Candidatos: </strong>Não há candidatos para essa viagem!
					</Typography>)
				}
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	trip: state.trips.tripDetail,
})

const mapDispatchToProps = dispatch => {
	return {
		decideCandidate: (tripId, candidateId) => dispatch(decideCandidate(tripId, candidateId)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Candidates));
