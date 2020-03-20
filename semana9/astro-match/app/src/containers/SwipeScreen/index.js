import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'

import UserSwipeCard from '../../components/UserSwipeCard'
import {AppBar} from '../../components/AppBar'
import {Loader} from '../../components/Loader'

import {updateCurrentPage} from '../../actions/route'
import { getProfile, choosePerson, countMatches } from '../../actions/profiles'

import {ButtonsWrapper, ContentWrapper, SwipeScreenWrapper, OptionButton} from './styled'
import {swipeLeft, swipeRight} from '../../components/UserSwipeCard/styled'

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export class SwipeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentAnimation: null,
		}
	}

	componentDidMount() {
		this.props.getProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.profileToSwipe !== this.props.profileToSwipe) {
			this.setState({currentAnimation: null})
		}
	}

	onChooseOption = (option) => () => {
		let currentAnimation = option === 'dislike' ? swipeRight : swipeLeft

		if (this.state.currentAnimation === null) {
			this.setState({currentAnimation: currentAnimation})
		}

		if (this.props.profileToSwipe) {
			this.props.chooseProfile(this.props.profileToSwipe.id, option === 'like')
		}
	}

	render() {
		const {profileToSwipe, goToMatchScreen, matchesCount} = this.props
		const {currentAnimation} = this.state
		// console.log(matchesCount)

		return (
			<SwipeScreenWrapper>
				<AppBar
					rightAction={
					<IconButton color="inherit" onClick={goToMatchScreen}>
						<Badge 
							badgeContent={matchesCount} 
							color="secondary">
							{matchesCount > 0 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
						</Badge>
					</IconButton>
				}
				/>
				<ContentWrapper>
					{currentAnimation !== null && (<Loader/>)}
					{profileToSwipe ? <UserSwipeCard
						userToSwipe={profileToSwipe}
						animationDirection={currentAnimation}
					/> : (<Loader/>)}
					<ButtonsWrapper>
						<OptionButton onClick={this.onChooseOption('dislike')} option="dislike">X</OptionButton>
						<OptionButton onClick={this.onChooseOption('like')} option="like">♥️</OptionButton>
					</ButtonsWrapper>
				</ContentWrapper>
			</SwipeScreenWrapper>
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
	matchesCount: state.profiles.matchesCount
})

const mapDispatchToProps = (dispatch) => {
	return {
		goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
		chooseProfile: (id, choice) => dispatch(choosePerson(id, choice)),
		getProfile: () => dispatch(getProfile()),
		countMatches: () => dispatch(countMatches())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen)
