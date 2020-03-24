import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

import { routes } from '../Router'

const HomeWrapper = styled.form`
  width: 100%;
  min-height: 90vh;
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

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { classes, goToLogin, goToApllication } = this.props

    return (
      <>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                FutureX
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        <HomeWrapper>
          <p>Bem vindx ao <strong>FutureX</strong>, sua plataforma de gerenciamento de viagens espaciais</p>
          <img src={'https://user-images.githubusercontent.com/45580434/77418220-5ddcbc00-6da5-11ea-9516-76b0d18b3813.png'}/>
          <div>
            <button onClick={goToLogin}>
              Login
          </button>
            <button onClick={goToApllication}>
              Formulário de aplicação
          </button>
          </div>
        </HomeWrapper>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    goToApllication: () => dispatch(push(routes.application))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(HomePage));