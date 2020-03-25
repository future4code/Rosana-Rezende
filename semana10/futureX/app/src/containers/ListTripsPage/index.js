import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { getTrips, setSeletctedTrip } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, CardActions } from '@material-ui/core'

const ListTripsWrapper = styled.form`
  width: 100%;
  min-height: 90vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const Trips = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CardTrip = styled(Card)`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  text-align: center;
  align-items: center;
`

const styles = {
  grow: {
    flexGrow: 1,
  },
  logo: {
    cursor: 'pointer',
  },
};

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

  clickDatail = (tripId) => {
    const { goToDetails, setSeletctedTrip } = this.props
    goToDetails()
    // console.log(tripId)
    setSeletctedTrip(tripId) // enviar o Id da trip
  }

  render() {

    const { classes, goToCreate, goToHome, trips } = this.props
    // console.log(trips)

    return (
      <>
        <AppBar position="static">
          <Toolbar>
          <Typography 
              variant="h6" color="inherit" className={classes.logo}
              onClick={goToHome}
            >
              FutureX
            </Typography>
            <div className={classes.grow}/>
            <Button color="inherit" 
              onClick={goToCreate} 
            >
              Criar Viagem
            </Button>
          </Toolbar>
        </AppBar>

        <ListTripsWrapper>

          <Typography variant="h4" color="inherit" className={classes.grow}>
            Lista de viagens espaciais
          </Typography>

          <Trips>
            {trips.map(trip => (
              <CardTrip key={trip.id}>
                <CardContent>
                  <Typography>
                    {trip.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary"
                    onClick={() => this.clickDatail(trip.id)}
                  >
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
  trips: state.trips.trips
})

const mapDispatchToProps = dispatch => {
  return {
    goToCreate: () => dispatch(push(routes.create)),
    goToDetails: () => dispatch(push(routes.details)),
    goToHome: () => dispatch(push(routes.home)),
    goToLogin: () => dispatch(push(routes.login)),
    getTrips: () => dispatch(getTrips()),
    setSeletctedTrip: (id) => dispatch(setSeletctedTrip(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ListTripsPage));