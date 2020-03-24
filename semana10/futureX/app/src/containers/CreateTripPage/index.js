import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { createTrip } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, TextField, MenuItem } from '@material-ui/core'

const CreateTripWrapper = styled.form`
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
  },
};

class CreateTripPage extends Component {
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
    console.log(this.state.form);
    // this.props.createTrip(this.state.form)
    // this.setState({ form: '' }) // NÃO CONSEGUI LIMPAR OS CAMPOS
  };

  render() {

    const { classes, goToList } = this.props

    const formFields = [
      {
        type: 'text',
        label: 'Nome da viagem',
        name: 'name',
        required: true,
        pattern: '[a-zA-Z]{5,}',
        title: 'Nome da viagem, no mínimo 5 letras',
      },
      {
        type: 'date',
        label: 'Data',
        name: 'date',
        title: 'Preencha uma data após 01/01/2021',
        required: true,
        pattern: '',
        min: '2021-01-01',
      },
      {
        type: 'text',
        label: 'Descrição',
        name: 'description',
        title: '',
        required: true,
        pattern: '',
        multiline: true,
        rows: '4'
      },
      {
        type: 'number',
        label: 'Duração',
        name: 'durationInDays',
        title: '',
        required: true,
        pattern: '',
      },
    ]

    const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              FutureX
              </Typography>
            <Button color="inherit" onClick={goToList}>Lista de Viagens</Button>
          </Toolbar>
        </AppBar>

        <CreateTripWrapper onSubmit={this.handleSubmission}>

          <Typography variant="h6" color="inherit">
            Preencha os campos para criar uma viagem espacial.
          </Typography>


          <TextField
            required
            id='planet'
            name='planet'
            label='Planeta'
            type='text'
            value={this.state.form['planet']  || ''}
            onChange={this.handleFieldChange}
            select  
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText={'Selecione um planeta'}  
            margin='normal'
            variant='outlined'
            fullWidth
            inputProps={{ 
              pattern: '',
              title: ''
            }}
            InputLabelProps={{
              shrink: true,
            }}
          >
            {planets.map(planet => (
              <MenuItem key={planet} value={planet}>{planet}</MenuItem>
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
                title: field.title
              }}
              // pattern={field.pattern}
              // title={field.title}
              min={field.min}
              multiline={field.multiline}
              rows={field.rows}
              margin='normal'
              variant='outlined'
              fullWidth
              value={this.state.form[field.name]  || ''}
              onChange={this.handleFieldChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          ))}       

        <Button
          variant='contained' 
          color='primary' 
          className={classes.button}
          type='submit'
        >
          Cadastrar
        </Button>

        </CreateTripWrapper>
      </>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    goToList: () => dispatch(push(routes.list)),
    createTrip: (trip) => dispatch(createTrip(trip))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateTripPage));
