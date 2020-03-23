import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

const TripDetailsWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    const { goToList, trip } = this.props

    return (
      <TripDetailsWrapper>
        <h1>TripDetailsPage</h1>
        
        <button onClick={goToList}>Lista de Viagens</button>

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

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
