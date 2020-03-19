// import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

class ProfileScreen extends React.Component {

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

export default connect(mapStateToProps)(ProfileScreen)
