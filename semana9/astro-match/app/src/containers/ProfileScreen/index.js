// import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { AppBar } from '../../components/AppBar'
import { mdiAccountSwitch } from '@mdi/js'
import { updateCurrentPage } from '../../actions/route'
import { MatchIcon, DivWrapper, DivImage, Avatar, Nome } from './styled'
import { getMatches } from '../../actions/profiles'

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
          <Nome>{selectedPerson.name}</Nome>
          <DivImage>
            <Avatar src={selectedPerson.photo}></Avatar>
          </DivImage>
          <p>Bio: {selectedPerson.bio}</p>
          <p>Idade: {selectedPerson.age}</p>
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
  getMatches: () => dispatch(getMatches())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)