import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { routes } from '../Router'

import { getTrips, applyToTrip } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, TextField, MenuItem   } from '@material-ui/core'

const ApplicationFormWrapper = styled.form`
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

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  menu: {
    width: 200,
  },

};

class ApplicationFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      age: undefined,
      text: undefined,
      profession: undefined,
      country: undefined,
      tripSelectedId: undefined
    };
  }

  componentDidMount(){
    this.props.getTrips()
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toAplly = (e) => {
    e.preventDefault()
    const newName = this.state.name
    const newAge = this.state.age
    const newText = this.state.text
    const newProfession = this.state.profession
    const newCountry = this.state.country
    const id = this.state.tripSelectedId

    if (newName && newAge && newText && newProfession && newCountry && id) {
      const application = {
        name: newName,
        age: newAge,
        applicationText: newText,
        profession: newProfession,
        country: newCountry
      }

      console.log(application)
      console.log(id) 
      // this.props.applyToTrip(id, application)

      this.setState({
        name: '',
        age: '',
        text: '',
        profession: '',
        country: '',
        tripSelectedId: ''
      })

    } else {
      alert('Preencha todos os campos para aplicar para uma viagem')
    }

  }

  render() {

    const { classes, goToHome, goToLogin, trips } = this.props
    // console.log(trips)

    const { name, age, text, profession, country, tripSelectedId } = this.state

    return (
      <>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                FutureX
              </Typography>
              <Button color="inherit" onClick={goToHome}>Voltar</Button>
              <Button color="inherit" onClick={goToLogin}>Login</Button>
            </Toolbar>
          </AppBar>
      
      <ApplicationFormWrapper>
        
        <Typography variant="h6" color="inherit">
        Preencha os dados abaixo para se candidata a uma viagem:
        </Typography>

        {/* <div> */}

        <TextField
          // id="outlined-name"
          label="Nome"
          margin="normal"
          variant="outlined"
          type='text'
          name='name'
          value={name}
          onChange={this.handleFieldChange}
          fullWidth
        />

        <TextField
          // id="outlined-name"
          label="Idade"
          margin="normal"
          variant="outlined"
          type='number'
          name='age'
          value={age}
          onChange={this.handleFieldChange}
          fullWidth
        />

        <TextField
          // id="outlined-multiline-static"
          label="Texto de aplicação"
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
          type='text'
          name='text'
          value={text}
          onChange={this.handleFieldChange}
          fullWidth
        />

        <TextField
          // id="outlined-name"
          label="Profissão"
          margin="normal"
          variant="outlined"
          type='text'
          name='profession'
          value={profession}
          onChange={this.handleFieldChange}
          fullWidth
        />

        <TextField
          // id="outlined-name"
          label="País"
          margin="normal"
          variant="outlined"
          type='text'
          name='country'
          value={country}
          onChange={this.handleFieldChange}
          fullWidth
        />

        <TextField
          // id="outlined-name"
          label="Viagem"
          margin="normal"
          variant="outlined"
          // type='text'
          name='tripSelectedId'
          value={tripSelectedId}
          onChange={this.handleFieldChange}
          fullWidth
          select
          SelectProps={{
            // native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Selecione uma viagem"
        > 
          <option value='' hidden></option>
          {trips.map(trip => {
            return (
              <MenuItem key={trip.id} value={trip.id}>{trip.name}</MenuItem >
            )
          })}
        </TextField>


        {/* Viagem:
        <select
          name='tripSelectedId'
          value={tripSelectedId}
          onChange={this.handleFieldChange}
        >
          <option value='' hidden>Selecione...</option>
          {trips.map(trip => {
            return (
              <option value={trip.id}>{trip.name}</option>
            )
          })}
        </select> */}

        {/* </div> */}

        <Button
          variant='contained' 
          color='primary' 
          className={classes.button}
          onClick={this.toAplly}
        >
          Aplicar
        </Button>



      </ApplicationFormWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips
})


const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    goToHome: () => dispatch(push(routes.home)),
    getTrips: () => dispatch(getTrips()),
    applyToTrip: (id, application) => dispatch(applyToTrip(id, application))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ApplicationFormPage));
