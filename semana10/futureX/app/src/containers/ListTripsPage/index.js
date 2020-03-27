import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import { getTrips, getTripDetail } from '../../actions'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, CardContent, CardActions } from '@material-ui/core'
import { CardTrip, DivTitle, ListTripsWrapper, Trips, styles } from './styles'
import Appbar from "../../components/Appbar";

class ListTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { goToLogin, getTrips } = this.props
    const token = localStorage.getItem('token')
    if (token === null) {
      goToLogin() //redireciona pra login
    }
    getTrips()
  }

  clickDetail = (tripId) => {
    const { goToDetails, getTripDetail } = this.props
    goToDetails()
    // console.log(tripId)
    getTripDetail(tripId) // enviar o Id da trip
  }


  render() {

    const { classes, trips } = this.props
    // console.log(trips)

    return (
      <>
        <Appbar page={'list'}/>

        <ListTripsWrapper>

          <DivTitle>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Lista de viagens espaciais
            </Typography>
          </DivTitle>

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

        </ListTripsWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips,
})

const mapDispatchToProps = dispatch => {
  return {
    goToDetails: () => dispatch(push(routes.details)),
    goToLogin: () => dispatch(push(routes.login)),
    getTrips: () => dispatch(getTrips()),
    getTripDetail: (id) => dispatch(getTripDetail(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ListTripsPage));