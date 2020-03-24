import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const TripDetailsWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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

    return (
      <>
      <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                      FutureX
                    </Typography>
                    <Button color="inherit" onClick={goToList}>Lista de Viagens</Button>
                  </Toolbar>
                </AppBar>
      <TripDetailsWrapper>

        Nome: {trip.name}
        <br/>

        Planeta: {trip.planet}
        <br/>

        Data: {trip.date}
        <br/>

        Duração: {trip.durationInDays}
        <br/>

        Descrição: {trip.description}
        <br/>

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
