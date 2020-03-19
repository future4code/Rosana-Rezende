// import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { AppBar } from '../../components/AppBar'
import { mdiAccountSwitch } from '@mdi/js'
import { updateCurrentPage } from '../../actions/route'
import { MatchIcon, DivWrapper, DivImage, Avatar, Nome } from './styled'
import { getMatches } from '../../actions/profiles'

class ProfileScreen extends React.Component {

  componentDidMount() {
    if (this.props.getMatches) {
      this.props.getMatches()
    }
  }

  render() {
    const { goToSwipeScreen, listWithSelectedPerson } = this.props
    // console.log(listWithSelectedPerson)
    return (
      <>
        <AppBar
          leftAction={<MatchIcon
            path={mdiAccountSwitch}
            size={1}
            onClick={goToSwipeScreen}
          />}
        />
        {listWithSelectedPerson && listWithSelectedPerson.map(person => {
          if (person !== false) {
            // console.log(person)
            return (
              <DivWrapper key={person.id}>
                <Nome>{person.name}</Nome>
                <DivImage>
                  <Avatar src={person.photo}></Avatar>
                </DivImage>
                <p>Bio: {person.bio}</p>
                <p>Idade: {person.age}</p>
              </DivWrapper>
            )
          }
        })}
      </>
    )
  }
}

// ProfileScreen.propTypes = {

// }


const mapStateToProps = state => ({
  listWithSelectedPerson: state.profiles.listWithSelectedPerson
})

const mapDispatchToProps = dispatch => ({
  goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
  getMatches: () => dispatch(getMatches())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)


