import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField } from '@material-ui/core'

import { routes } from '../Router'
import { createTrip } from '../../actions'

import { formFields, planets } from './variables'
import { CreateTripWrapper, DivContainer, styles } from './styles'

import Appbar from "../../components/Appbar";

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }
  componentDidMount(){
    const { goToLogin } = this.props
    const userData = localStorage.getItem('user')
    const newUserData = JSON.parse(userData)
    if(newUserData.email.includes('admin') === false){
      goToLogin()
    }
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
    if(this.state.form['description'].length < 30){
      alert('O campo de descrição deve ter no mínimo 30 caracteres')
    } else {
      this.props.createTrip(this.state.form)
      this.setState({
        form: {
          [event.target.name]: ''
        }
      })
    }    
  };


  render() {
    const { classes } = this.props  
    
    return (
      <>
        <Appbar page={'create'}/>
        
        <DivContainer>

          <Typography variant="h6" color="inherit">
            Preencha os campos para criar uma viagem espacial.
          </Typography>
          
          <CreateTripWrapper onSubmit={this.handleSubmission}>

            <TextField
              id='planet'
              name='planet'
              label='Planeta'
              type='text'
              value={this.state.form['planet'] || ''}
              onChange={this.handleFieldChange}
              margin='normal'
              variant='outlined'
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              select
              SelectProps={{
                native: true,
                required: true
              }}
            >
              <option value=''>Selecione um planeta...</option>
              {planets.map(planet => (
                <option key={planet} value={planet}>{planet}</option>
              ))}
            </TextField>

            {formFields.map(field => (
              <TextField
                id={field.name}
                key={field.name}
                name={field.name}
                type={field.type}
                label={field.label}
                required={field.required}
                inputProps={{
                  pattern: field.pattern,
                  title: field.title,
                  min: field.min
                }}
                multiline={field.multiline}
                rows={field.rows}
                margin='normal'
                variant='outlined'
                fullWidth
                value={this.state.form[field.name] || ''}
                onChange={this.handleFieldChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            ))}

            <Button variant='contained' color='primary'
              className={classes.button} type='submit'
            >
              Cadastrar
            </Button>

          </CreateTripWrapper>
        </DivContainer>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    createTrip: (trip) => dispatch(createTrip(trip))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateTripPage));
