import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import { DivTitle, TripDetailsWrapper, styles } from './styles'
import Approved from "../Approved";
import Candidates from "../Candidates";

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { trip } = this.props

    return (

          <TripDetailsWrapper>

            <DivTitle>
              <Typography component="p" variant="h5" color="inherit">
                Detalhes da viagem <strong>{trip.name}</strong>
              </Typography>
            </DivTitle>

            <Typography component="p" variant="h6" color="inherit">
              <strong>Planeta: </strong>{trip.planet}
            </Typography>

            <Typography component="p" variant="h6" color="inherit">
              <strong>Data:</strong> {trip.date}
            </Typography>

            <Typography component="p" variant="h6" color="inherit">
              <strong>Duração:</strong> {trip.durationInDays} dias
            </Typography>

            <Typography component="p" variant="h6" color="inherit">
              <strong>Descrição:</strong> {trip.description}
            </Typography>

            <Approved/>

            <Candidates/>           

          </TripDetailsWrapper>

    );
  }
}

const mapStateToProps = (state) => ({
  trip: state.trips.tripDetail,
})

export default connect(mapStateToProps)(withStyles(styles)(TripDetails));
