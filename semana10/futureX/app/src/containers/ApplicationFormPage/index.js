import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

const ApplicationFormWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class ApplicationFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    const { goToHome, goToLogin } = this.props

    return (
      <ApplicationFormWrapper>
        <h1>ApplicationFormPage</h1>

        <button onClick={goToHome}>Voltar</button>
        <button onClick={goToLogin}>Login</button>

      </ApplicationFormWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    goToHome: () => dispatch(push(routes.home))
  }
}

export default connect(null, mapDispatchToProps)(ApplicationFormPage);
