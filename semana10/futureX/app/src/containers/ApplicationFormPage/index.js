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
      form: {}
    };
  }

  componentDidMount(){
    this.props.getTrips()
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
    // this.props.minhaAcao(this.state.form)
    // this.props.applyToTrip(id, application)
  };

  render() {

    const { classes, goToHome, goToLogin, trips } = this.props
    // console.log(trips)

    const formFields = [
      { 
        type: 'text', 
        label: 'Nome', 
        name: 'name', 
        title: '', 
        required: true, 
        pattern: '', 
      },
      { 
        type: 'number', 
        label: 'Idade', 
        name: 'age', 
        title: '', 
        required: true, 
        pattern: '', 
        min: 18
      },
      { 
        type: 'text', 
        label: 'Texto de aplicação', 
        name: 'text', 
        title: '', 
        required: true, 
        pattern: '', 
        multiline: true,
        rows: '4'
      },
      { 
        type: 'text', 
        label: 'Profissão', 
        name: 'profession', 
        title: '', 
        required: true, 
        pattern: '', 
      },
    ]

    const coutrys = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    const formSelects = [
      {
        type: 'text', 
        label: 'País', 
        name: 'country', 
        title: '', 
        required: true, 
        pattern: '', 
        helperText: 'Selecione um país' ,
        options: coutrys
      },
      {
        type: 'text', 
        label: 'Viagem', 
        name: 'tripSelectedId', 
        title: '', 
        required: true, 
        pattern: '', 
        helperText: 'Selecione uma viagem' ,   
        options: trips
      },
    ]

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
      
      <ApplicationFormWrapper onSubmit={this.handleSubmission}>
        
        <Typography variant="h6" color="inherit">
        Preencha os dados abaixo para se candidatar a uma viagem:
        </Typography>

        {formFields.map(field => (
          <TextField
            key={field.name}
            id={field.name}
            name={field.name}
            type={field.type}
            label={field.label}
            title={field.title}
            required={field.required}
            pattern={field.pattern}
            multiline={field.multiline}
            rows={field.rows}
            min={field.min}
            margin='normal'
            variant='outlined'
            fullWidth
            value={this.state.form[field.name]}
            onChange={this.handleFieldChange}
          />
        ))}

        {formSelects.map(select => (
          <TextField
            key={select.name}
            id={select.name}
            name={select.name}
            type={select.type}
            label={select.label}
            title={select.title}
            required={select.required}
            pattern={select.pattern}
            margin='normal'
            variant='outlined'
            fullWidth
            value={this.state.form[select.name]}
            onChange={this.handleFieldChange}        
            select  
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText={select.helperText}          
          >
            {/* <MenuItem value='' hidden></MenuItem> */}
            {select.options === trips ? 
              select.options.map(option => {
              return (
                <MenuItem key={option.id} value={option.id}>{option.name} - {option.planet}</MenuItem >
              )
            })
            : 
            select.options.map(option => {
              return (
                <MenuItem key={option} value={option}>{option}</MenuItem >
              )
            })
            }
          </TextField>
        ))}

        <Button
          variant='contained' 
          color='primary' 
          className={classes.button}
          type='submit'
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
