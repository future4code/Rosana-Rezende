import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'
import { getMatches, setSelectedProfile } from '../../actions/profiles'

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

	render() {
		const {goToSwipeScreen, matches } = this.props
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
							<Avatar src={match.photo}/>
							<ListText>{match.name}</ListText>
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
	setSelectedProfile: (id) => dispatch(setSelectedProfile(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
