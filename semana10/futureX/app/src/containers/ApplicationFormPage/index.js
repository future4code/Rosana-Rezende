import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField } from '@material-ui/core'

import { getTrips, applyToTrip } from '../../actions'
import { formFields, coutrys } from './variables'
import Appbar from "../../components/Appbar";

import { ApplicationFormWrapper, DivContainer, styles} from './styles'

class ApplicationFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  componentDidMount() {
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
    // textarea não dá suporte ao pattern
    if (this.state.form['applicationText'].length < 30) {
      alert('O campo de texto de aplicação deve ter no mínimo 30 caracteres')
    } else {
      this.props.applyToTrip(this.state.form)
      this.setState({
        form: {
          [event.target.name]: ''
        }
      })
    }
  };


  render() {

    const { classes, trips } = this.props

    const formSelects = [
      {
        type: 'text',
        label: 'País',
        name: 'country',
        title: '',
        required: true,
        pattern: '',
        helperText: 'Selecione um país...',
        options: coutrys
      },
      {
        type: 'text',
        label: 'Viagem',
        name: 'tripSelectedId',
        title: '',
        required: true,
        pattern: '',
        helperText: 'Selecione uma viagem...',
        options: trips
      },
    ]

    return (
      <>
        <Appbar page={'application'}/>
        
        <DivContainer>

          <Typography variant="h6" color="inherit">
            Preencha os dados abaixo para se candidatar a uma viagem:
          </Typography>

          <ApplicationFormWrapper onSubmit={this.handleSubmission}>
          {formFields.map(field => (
            <TextField
              key={field.name}
              id={field.name}
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

          {formSelects.map(select => (
            <TextField
              key={select.name}
              id={select.name}
              name={select.name}
              type={select.type}
              label={select.label}
              value={this.state.form[select.name] || ''}
              onChange={this.handleFieldChange}
              margin='normal'
              variant='outlined'
              fullWidth
              select
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
                required: true
              }}
            >
              <option value=''>{select.helperText}</option>
              {select.options === trips ?
                select.options.map(option =>
                  <option key={option.id} value={option.id}>{option.name} - {option.planet}</option >)
                :
                select.options.map(option =>
                  <option key={option} value={option}>{option}</option >)
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

        </DivContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips
})


const mapDispatchToProps = dispatch => {
  return {
    getTrips: () => dispatch(getTrips()),
    applyToTrip: (form) => dispatch(applyToTrip(form))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ApplicationFormPage));
