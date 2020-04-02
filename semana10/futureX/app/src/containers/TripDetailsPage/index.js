import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";

import { routes } from '../Router'
import { setTripDetail } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import Appbar from "../../components/Appbar";

import { TripDetailsWrapper, styles } from './styles'
import TripDetails from "../../components/TripDetails";

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillUnmount() {
    const { setTripDetail } = this.props
    setTripDetail()
  }

  render() {
    const { trip } = this.props

    return (
      <>
        <Appbar page={'details'} />

        {trip ?
          <TripDetails />
          :
          <TripDetailsWrapper>
            <Typography component="p" variant="h6" color="inherit">
              Carregando...
            </Typography>
          </TripDetailsWrapper>
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
    setTripDetail: (id) => dispatch(setTripDetail(id)),
    goToLogin: () => dispatch(push(routes.login)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TripDetailsPage));
