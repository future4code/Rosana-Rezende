import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { login } from '../../actions'
import { routes } from '../Router'

import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, TextField } from '@material-ui/core'

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
  logo: {
    cursor: 'pointer',
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
      loginData: {}
    };
  }

  handleFieldChange = event => {
    this.setState({
      loginData: {
        ...this.state.loginData,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmission = event => {
    event.preventDefault();
    this.props.login(this.state.loginData)
    this.setState({
      loginData: {
        [event.target.name]: ''
      }
    })
  };

  render() {
    const { classes, goToHome } = this.props

    const loginDataField = [
      { name: 'email', type: 'email', label: 'Email', placeholder: 'teste@email.com' },
      { name: 'password', type: 'password', label: 'Senha', placeholder: '1234' }
    ]

    return (
      <>
          <AppBar position="static">
            <Toolbar>
              <Typography 
                variant="h6" color="inherit" className={classes.logo}
                onClick={goToHome}
              >
                FutureX
              </Typography>
              <div className={classes.grow}/>
            </Toolbar>
          </AppBar>

      <LoginWrapper onSubmit={this.handleSubmission}>

          <Typography variant="h6" color="inherit"> 
            Preencha os campos para fazer login:
          </Typography>

          {loginDataField.map(field => (
            <TextField
              key={field.name}
              id={field.name}
              name={field.name}
              type={field.type}
              label={field.label}
              placeholder={field.placeholder}
              required
              margin='normal'
              variant='outlined'
              value={this.state.loginData[field.name] || ''}
              onChange={this.handleFieldChange}
            />
          ))}
          
        <Button 
          type='submit'
          variant='contained' 
          color='primary' 
          className={classes.button}
        >
            Login
        </Button>

      </LoginWrapper>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (loginData) => dispatch(login(loginData)),
  goToHome: () => dispatch(push(routes.home)),

})

export default connect(null, mapDispatchToProps)(withStyles(styles)(LoginPage));
