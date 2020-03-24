import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const TripDetailsWrapper = styled.div`
  width: 90vw;
  margin: auto
  min-height: 90vh;
  gap: 10px;
  place-content: center;
  display: grid;
`

const DivTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const styles = {
  grow: {
    flexGrow: 1,
  },
};

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    const { classes, goToList, trip } = this.props
    // console.log(trip)

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              FutureX
            </Typography>
            <Button color="inherit" onClick={goToList}>
              Lista de Viagens
            </Button>
          </Toolbar>
        </AppBar>

        <TripDetailsWrapper>

          <DivTitle>
            <Typography component="p" variant="h5" color="inherit">
              Detalhes da viagem '<strong>{trip.name}</strong>'
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

        </TripDetailsWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  trip: state.trips.selectedTrip
})

const mapDispatchToProps = dispatch => {
  return {
    goToList: () => dispatch(push(routes.list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TripDetailsPage));
