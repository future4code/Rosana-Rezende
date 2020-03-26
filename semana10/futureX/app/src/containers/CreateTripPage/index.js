import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { createTrip } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, TextField, IconButton } from '@material-ui/core'
import { Input } from '@material-ui/icons';

const DivContainer = styled.div`
  display: grid;
  min-height: 80vh;
  place-content: center;
  width: 80vw;
  margin: 2rem auto;
`;

const CreateTripWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 1rem auto;
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
    margin: 'auto',
    marginTop: 20,
  },
};

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  componentDidMount() {
    const { goToLogin } = this.props
    const token = localStorage.getItem('token')
    if (token === null) {
      goToLogin() //redireciona pra login
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
    // console.log(this.state.form);
    this.props.createTrip(this.state.form)
    this.setState({
      form: {
        [event.target.name]: ''
      }
    })
  };

  logout = () => {
    const { goToHome } = this.props
    localStorage.removeItem('token') //senão fica sempre logado
    goToHome()
  }

  render() {

    const { classes, goToList, goToHome } = this.props

    let today = new Date();
    let month = JSON.stringify(today.getMonth() + 1)
    if (month < 10) {
      month = '0' + month
    }
    let dateNow = today.getFullYear() + '-' + month + '-' + today.getDate()

    const formFields = [
      {
        type: 'text',
        label: 'Nome da viagem',
        name: 'name',
        required: true,
        pattern: '[a-zA-Z ]{5,}',
        title: 'Nome da viagem, no mínimo 5 letras',
      },
      {
        type: 'date',
        label: 'Data',
        name: 'date',
        required: true,
        min: dateNow,
        // pattern: '',
        // title: 'Preencha uma data após 01/01/2021',
      },
      {
        type: 'text',
        label: 'Descrição',
        name: 'description',
        required: true,
        multiline: true,
        rows: '4',
        pattern: '[a-zA-Z ]{30,}',
        title: 'Descrição, no mínimo 30 letras',
      },
      {
        type: 'number',
        label: 'Duração',
        name: 'durationInDays',
        required: true,
        min: '50'
      },
    ]

    const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']

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
            <div className={classes.grow} />
            <Button color="inherit" onClick={goToList}>
              Lista de Viagens
            </Button>
            <IconButton
              color="inherit"
              onClick={this.logout}
            >
              <Input />
            </IconButton>
          </Toolbar>
        </AppBar>

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
              // helperText={'Selecione um planeta'}  
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
              className={classes.button}
              type='submit'
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
    goToList: () => dispatch(push(routes.list)),
    goToLogin: () => dispatch(push(routes.login)),
    goToHome: () => dispatch(push(routes.home)),
    createTrip: (trip) => dispatch(createTrip(trip))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateTripPage));
