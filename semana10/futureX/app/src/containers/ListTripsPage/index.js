import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { getTrips, getTripDetail } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Card, CardContent, CardActions } from '@material-ui/core'
import { Input } from '@material-ui/icons';

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
  align-items: center;
`

const DivTitle = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  min-height: 8vw;
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

  clickDetail = (tripId) => {
    const { goToDetails, getTripDetail } = this.props
    goToDetails()
    // console.log(tripId)
    getTripDetail(tripId) // enviar o Id da trip
  }

  logout = () => {
    const { goToHome} = this.props
    localStorage.removeItem('token') //senão fica sempre logado
    goToHome()
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
            <IconButton
              color="inherit"
              onClick={this.logout}
            >
              <Input/>
            </IconButton>
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
                  <DivTitle>
                    <Typography variant="subtitle1">
                      {trip.name}
                    </Typography>
                  </DivTitle>
                  <div>
                  <Typography>
                    <strong>Planeta: </strong>{trip.planet}
                  </Typography>
                  <Typography>
                   <strong>Data: </strong>{trip.date}
                  </Typography>
                  <Typography>
                   <strong>Duração: </strong>{trip.durationInDays} dias
                  </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button color="primary"
                    onClick={() => this.clickDetail(trip.id)}
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
    getTripDetail: (id) => dispatch(getTripDetail(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ListTripsPage));