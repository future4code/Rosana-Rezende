import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField } from '@material-ui/core'

import Appbar from "../../components/Appbar";

import { LoginWrapper, styles } from './styles'

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
    const { classes } = this.props

    const loginDataField = [
      { name: 'email', type: 'email', label: 'Email', placeholder: 'teste@email.com' },
      { name: 'password', type: 'password', label: 'Senha', placeholder: '1234' }
    ]

    return (
      <>
        <Appbar page={'login'} />

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

})

export default connect(null, mapDispatchToProps)(withStyles(styles)(LoginPage));
