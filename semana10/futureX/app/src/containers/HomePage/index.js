import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

const HomeWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { goToLogin, goToApllication } = this.props

    return (
      <HomeWrapper>
        <h1>HomePage</h1>
        <p>Bem vindx ao <strong>FutureX</strong>, sua plataforma de gerenciamento de viagens espaciais</p>
        <button onClick={goToLogin}>
          Login
        </button>
        <button onClick={goToApllication}>
          Formulário de aplicação
        </button>
      </HomeWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    goToApllication: () => dispatch(push(routes.application))
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
