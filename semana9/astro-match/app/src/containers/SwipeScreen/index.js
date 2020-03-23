import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserSwipeCard from '../../components/UserSwipeCard'
import { AppBar } from '../../components/AppBar'
import { Loader } from '../../components/Loader'

import { updateCurrentPage } from '../../actions/route'
import { getProfile, choosePerson, upCountMatches, hideMessage } from '../../actions/profiles'

import { ButtonsWrapper, ContentWrapper, SwipeScreenWrapper, 
	OptionButton, FavoriteStyle, FavoriteBorderStyle, Message
} from './styled'
import { swipeLeft, swipeRight } from '../../components/UserSwipeCard/styled'

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { Close } from '@material-ui/icons'

import SnackbarContent from '@material-ui/core/SnackbarContent';

export class SwipeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentAnimation: null,
		}
	}

	componentDidMount() {
		if (!this.props.profileToSwipe) {
			this.props.getProfile();
		}
		// this.props.upCountMatches()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.profileToSwipe !== this.props.profileToSwipe) {
			this.setState({ currentAnimation: null })
			// this.props.upCountMatches()
		}
	}

	onChooseOption = (option) => () => {
		let currentAnimation = option === 'dislike' ? swipeRight : swipeLeft

		if (this.state.currentAnimation === null) {
			this.setState({ currentAnimation: currentAnimation })
		}

		if (this.props.profileToSwipe) {
			// this.props.getProfile();
			this.props.chooseProfile(this.props.profileToSwipe.id, option === 'like')
		}
	}

	render() {
		const { profileToSwipe, goToMatchScreen, matchesCount, makeMatch, hideMessage } = this.props
		const { currentAnimation } = this.state
		// console.log(makeMatch)

		return (
			<>
				<SwipeScreenWrapper>
					<AppBar
						rightAction={
							<IconButton color="inherit" onClick={goToMatchScreen}>
								<Badge
									badgeContent={matchesCount}
									color="secondary">
									{matchesCount > 0 ? <FavoriteStyle /> : <FavoriteBorderStyle />}
								</Badge>
							</IconButton>
						}
					/>
					<ContentWrapper>
						{currentAnimation !== null && (<Loader />)}
						{profileToSwipe ? <UserSwipeCard
							userToSwipe={profileToSwipe}
							animationDirection={currentAnimation}
						/> : (<Loader />)}
						<ButtonsWrapper>
							<OptionButton onClick={this.onChooseOption('dislike')} option="dislike">X</OptionButton>
							<OptionButton onClick={this.onChooseOption('like')} option="like">♥️</OptionButton>
						</ButtonsWrapper>
					</ContentWrapper>
				</SwipeScreenWrapper>

				{makeMatch && (
				<SnackbarContent aria-describedby="client-snackbar"
					message={
						<Message id="client-snackbar">
							<p>Deu Match na última tentativa... Vai lá espiar, ou continue ♥️</p>
							</Message>
					}
					action={[
						<IconButton key="close" aria-label="Close" color="inherit">
						  <Close onClick={hideMessage} />
						</IconButton>,
					  ]}
				></SnackbarContent>
				)}
			</>
		)
	}
}

SwipeScreen.propTypes = {
	goToMatchScreen: PropTypes.func.isRequired,
	chooseProfile: PropTypes.func.isRequired,
	getProfile: PropTypes.func.isRequired,
	profileToSwipe: PropTypes.object,
}

const mapStateToProps = (state) => ({
	profileToSwipe: state.profiles.profile,
	matchesCount: state.profiles.matchesCount,
	makeMatch: state.profiles.makeMatch
})

const mapDispatchToProps = (dispatch) => {
	return {
		goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
		chooseProfile: (id, choice) => dispatch(choosePerson(id, choice)),
		getProfile: () => dispatch(getProfile()),
		upCountMatches: () => dispatch(upCountMatches()),
		hideMessage: () => dispatch(hideMessage())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen)
