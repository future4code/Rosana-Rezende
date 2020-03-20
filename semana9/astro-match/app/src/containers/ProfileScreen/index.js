// import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { AppBar } from '../../components/AppBar'
import UserSwipeCard from '../../components/UserSwipeCard'

import { updateCurrentPage } from '../../actions/route'

import { mdiAccountSwitch } from '@mdi/js'
import { MatchIcon, DivWrapper, Bio } from './styled'

class ProfileScreen extends React.Component {

  render() {
    const { goToSwipeScreen, selectedPerson } = this.props
    // console.log(selectedPerson)
    return (
      <>
        <AppBar
          leftAction={<MatchIcon
            path={mdiAccountSwitch}
            size={1}
            onClick={goToSwipeScreen}
          />}
        />
        <DivWrapper key={selectedPerson.id}>
          <UserSwipeCard userToSwipe={selectedPerson}/>
          <Bio>{selectedPerson.bio}</Bio>
        </DivWrapper>
      </>
    )
  }
}

// ProfileScreen.propTypes = {
// }

const mapStateToProps = state => ({
  selectedPerson: state.profiles.selectedPerson
})

const mapDispatchToProps = dispatch => ({
  goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)