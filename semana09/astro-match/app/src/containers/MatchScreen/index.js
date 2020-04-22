import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar } from '../../components/AppBar'
import { mdiAccountSwitch } from '@mdi/js'
import { updateCurrentPage } from '../../actions/route'
import { Avatar, List, ListItem, ListText, MatchIcon,
	//  Delete 
} from './styled'

import { getMatches, setSelectedProfile, 
	// setNewMatches 
} from '../../actions/profiles'

// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

class MatchScreen extends Component {
	componentDidMount() {
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}

	goToProfileScreenAndSendProfile = (profileSelectedId) => {
		console.log(profileSelectedId)
		this.props.setSelectedProfile(profileSelectedId)
		this.props.goToProfileScreen()
	}

	newMatches = (profileSelectedId) => {
		// console.log(profileSelectedId)
		this.props.setNewMatches(profileSelectedId)
	}

	render() {
		const { goToSwipeScreen, matches } = this.props
		// console.log(matches)
		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>

				<List>
					{matches && matches.map((match) => (
						<ListItem
							key={match.name}
						onClick={() => this.goToProfileScreenAndSendProfile(match.id)}
						>
							{/* <div onClick={() => this.goToProfileScreenAndSendProfile(match.id)}> */}
								<Avatar src={match.photo} />
								<ListText>{match.name}</ListText>
							{/* </div>

							<div>
        						<Delete onClick={() => this.newMatches(match.id)}/>
							</div> */}

						</ListItem>
					))}
				</List>
			</div>
		)
	}
}

MatchScreen.propTypes = {
	goToSwipeScreen: PropTypes.func.isRequired,
	getMatches: PropTypes.func.isRequired,
	matches: PropTypes.array
}

const mapStateToProps = state => ({
	matches: state.profiles.matches
})

const mapDispatchToProps = dispatch => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
	goToProfileScreen: () => dispatch(updateCurrentPage('ProfileScreen')),
	getMatches: () => dispatch(getMatches()),
	setSelectedProfile: (id) => dispatch(setSelectedProfile(id)),
	// setNewMatches: (id) => dispatch(setNewMatches(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
