import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { createTrip } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const CreateTripWrapper = styled.form`
  width: 100%;
  height: 100vh;
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

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      planet: undefined,
      date: undefined,
      description: undefined,
      durationInDays: undefined
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onCreateTrip = (e) => {
    e.preventDefault()
    const newName = this.state.name
    const newPlanet = this.state.planet
    const newDate = this.state.date
    const newDescription = this.state.description
    const newDurationInDays =  this.state.durationInDays
    if(newName && newPlanet && newDate && newDescription && newDurationInDays) {
      const trip = {
        name: newName,
        planet: newPlanet,
        date: newDate,
        description: newDescription,
        durationInDays: newDurationInDays
      }
      console.log(trip)
      // this.props.createTrip(trip)
      this.setState({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
      })
    } else {
      alert('Preencha todos os campos para cadastrar uma viagem')
    }
  }


  render() {

    const { name, planet, date, description, durationInDays } = this.state
    const { classes, goToList } = this.props

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
      <CreateTripWrapper>

        <h4>Preencha os campos para criar uma viagem espacial.</h4>
        <br/><br/>

        Nome da viagem: 
        <input 
          required
          type='text' 
          value={name}
          name='name'
          onChange={this.handleFieldChange}
        />
        <br/>

        Planeta:
        <select
          required
          value={planet}
          name='planet'
          onChange={this.handleFieldChange}
        >
          <option value='' hidden>Selecione...</option>
          <option value={'Mercúrio'}>Mercúrio</option>
          <option value={'Vênus'}>Vênus</option>
          <option value={'Terra'}>Terra</option>
          <option value={'Marte'}>Marte</option>
          <option value={'Júpiter'}>Júpiter</option>
          <option value={'Saturno'}>Saturno</option>
          <option value={'Urano'}>Urano</option>
          <option value={'Netuno'}>Netuno</option>
        </select>
        <br/>

        Data:
        <input 
          required
          type='date' 
          value={date}
          name='date'
          onChange={this.handleFieldChange}
        />
        <br/>

        Descrição:
        <textarea
          required
          value={description}
          name='description'
          onChange={this.handleFieldChange}
        />
        <br/>

        Duração (dias):
        <input 
          required
          type='number' 
          value={durationInDays}
          name='durationInDays'
          onChange={this.handleFieldChange}
        />
        <br/>

        <button
          onClick={this.onCreateTrip}
        >
          Cadastrar
        </button>

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
