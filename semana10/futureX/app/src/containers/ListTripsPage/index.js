import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { getTrips, setSeletctedTrip } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const ListTripsWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const Trips = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Trip = styled.div`
  margin: 1rem;
  border: 1px solid black;
  border-radius: 15px;
  padding: 1rem;
  text-align: center;
  width: 15vw;
`

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ListTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getTrips()
  }

  clickDatail = (tripId) => {
    this.props.goToDetails()
    // enviar os detalhes da trip
    // console.log(tripId)
    this.props.setSeletctedTrip(tripId)
  }

  render() {

    const { classes, goToCreate, trips } = this.props
    // console.log(trips)

    return (
      <>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                FutureX
              </Typography>
              <Button color="inherit" onClick={goToCreate}>Criar Viagem</Button>
            </Toolbar>
          </AppBar>
      <ListTripsWrapper>

        <h2>Lista de viagens espaciais</h2>

        <Trips>

        { trips.map(trip => (
          <Trip key={trip.id}>
            <p>{trip.name}</p>
            <button onClick={() => this.clickDatail(trip.id)}>Detalhes</button>
          </Trip>
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
    getTrips: () => dispatch(getTrips()),
    setSeletctedTrip: (id) => dispatch(setSeletctedTrip(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ListTripsPage));