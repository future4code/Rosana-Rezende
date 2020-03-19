// import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
// import { fetchProfile } from '../../actions/profiles'

class ProfileScreen extends React.Component {
  componentDidMount() {
		// this.props.fetchProfile();
  }
  
  render() {
    // console.log(this.props.profile)
    return (
      <div>
      </div>
    )
  }
}


// ProfileScreen.propTypes = {

// }

const mapStateToProps = (state) => ({
  // profile: state.profiles.profile
})

const mapDispatchToProps = (dispatch) => ({
  // fetchProfile: () => dispatch(fetchProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
