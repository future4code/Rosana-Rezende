import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

const CreateTripWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    const { goToList } = this.props

    return (
      <CreateTripWrapper>
        <h1>CreateTripPage</h1>

        {/* <button onClick={}>Cadastrar</button> */}
        <button onClick={goToList}>Lista de Viagens</button>

      </CreateTripWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToList: () => dispatch(push(routes.list)),
  }
}

export default connect(null, mapDispatchToProps)(CreateTripPage);
