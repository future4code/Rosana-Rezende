import React, { Component } from "react";
import { signup } from '../../actions'
import { connect } from "react-redux";

import { loginForm } from './constants'

import Appbar from "../../components/Appbar";

import { TextField } from "@material-ui/core";
import { ButtonStyled, FormRegister, RegisterWrapper } from './styles'

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerData: {}
    }
  }

  handleSubmission = (event) => {
    event.preventDefault()
    this.props.signup(this.state.registerData)
    this.setState({
      registerData: {
        [event.target.name]: ""
      }
    })
  }

  handleTextFieldChange = (event) => {
    this.setState({
      registerData: {
        ...this.state.registerData,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <>
      
        <Appbar page={'register'} />

        <RegisterWrapper>
          <h1>Cadastrar</h1>

          <FormRegister
            autoComplete="on"
            onSubmit={this.handleSubmission}>


            {loginForm.map(field => (
              <TextField
                label={field.label}
                key={field.name}
                variant="outlined" margin="normal"
                name={field.name}
                type={field.type}
                value={this.state.registerData[field.name] || ""}
                id={field.name}
                required={field.required}
                onChange={this.handleTextFieldChange}
                inputProps={{
                  pattern: field.pattern,
                  title: field.title
                }}
              />
            ))}

            <ButtonStyled type="submit" color="primary" variant="contained">
              Cadastrar
            </ButtonStyled>

          </FormRegister>

        </RegisterWrapper>

      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (registerData) => dispatch(signup(registerData))
  }
}

export default connect(null, mapDispatchToProps)(RegisterPage);