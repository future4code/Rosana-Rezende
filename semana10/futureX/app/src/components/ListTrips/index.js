import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../../containers/Router'
import { getTripDetail } from '../../actions'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, CardContent, CardActions } from '@material-ui/core'
import { CardTrip, DivTitle, Trips, styles } from './styles'

class ListTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickDetail = (tripId) => {
    const { goToDetails, getTripDetail } = this.props
    goToDetails()
    getTripDetail(tripId) // enviar o Id da trip
  }

  render() {

    const { trips } = this.props
    // console.log(trips)

    return (
         <Trips>

            {trips.map(trip => (
              <CardTrip key={trip.id}>
                <CardActions>
                  <DivTitle>
                    <Typography variant="subtitle1">
                      {trip.name}
                    </Typography>
                  </DivTitle>
                </CardActions>
                <CardContent>
                  <Typography>
                    <strong>Planeta: </strong>{trip.planet}
                  </Typography>
                  <Typography>
                    <strong>Data: </strong>{trip.date}
                  </Typography>
                  <Typography>
                    <strong>Duração: </strong>{trip.durationInDays} dias
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary"
                    onClick={() => this.clickDetail(trip.id)}>
                    Detalhes
                  </Button>
                </CardActions>
              </CardTrip>
            ))}

          </Trips>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips,
})

const mapDispatchToProps = dispatch => {
  return {
    goToDetails: () => dispatch(push(routes.details)),
    getTripDetail: (id) => dispatch(getTripDetail(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ListTrips));