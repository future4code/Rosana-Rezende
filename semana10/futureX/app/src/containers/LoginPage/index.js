import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

import { routes } from '../Router'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const LoginWrapper = styled.form`
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
  button: {
    width: 150,
    margin: 40,
  }
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    const { classes, goToList } = this.props

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
      <LoginWrapper>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button 
          variant='contained' 
          color='primary' 
          className={classes.button}
          onClick={goToList}>Login</Button>
      </LoginWrapper>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToList: () => dispatch(push(routes.list)),
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(LoginPage));
