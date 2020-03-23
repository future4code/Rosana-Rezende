import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { getTrips, setSeletctedTrip } from '../../actions'

const ListTripsWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

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

    const { goToCreate, trips } = this.props
    // console.log(trips)

    return (
      <ListTripsWrapper>
        <h1>ListTripsPage</h1>

        <button onClick={goToCreate}>Criar viagem</button>


        { trips.map(trip => (
          <div key={trip.id}>
            <p>{trip.name}</p>
            <button onClick={() => this.clickDatail(trip.id)}>Detalhes</button>
          </div>
        ))}


      </ListTripsWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);