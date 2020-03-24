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
  button: {
    width: 150,
    margin: 40,
  }
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  handleFieldChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmission = event => {
    event.preventDefault();
    // this.props.minhaAcao(this.state.form)
    // console.log(this.state.form)
    this.setState({
      form: {
        [event.target.name]: ''
      }
    })
    this.props.goToList()
  };

  render() {
    const { classes } = this.props

    const formField = [
      { name: 'email', type: 'email', label: 'Email' },
      { name: 'password', type: 'password', label: 'Senha' }
    ]

    return (
      <>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                FutureX
              </Typography>
            </Toolbar>
          </AppBar>

      <LoginWrapper onSubmit={this.handleSubmission}>

          <Typography variant="h6" color="inherit"> 
            Preencha os campos para fazer login:
          </Typography>

          {formField.map(field => (
            <TextField
              key={field.name}
              id={field.name}
              name={field.name}
              type={field.type}
              label={field.label}
              required
              margin='normal'
              variant='outlined'
              value={this.state.form[field.name] || ''}
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

const mapDispatchToProps = dispatch => {
  return {
    goToList: () => dispatch(push(routes.list)),
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(LoginPage));
