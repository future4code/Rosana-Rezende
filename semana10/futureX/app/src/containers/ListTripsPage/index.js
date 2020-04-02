import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { routes } from '../Router'
import { getTrips } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import { DivTitle, ListTripsWrapper, styles } from './styles'

import Appbar from "../../components/Appbar";
import ListTrips from '../../components/ListTrips'

class ListTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { getTrips } = this.props
    getTrips()
  }

  render() {

    const { classes } = this.props

    return (
      <>
        <Appbar page={'list'}/>

        <ListTripsWrapper>

          <DivTitle>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Lista de viagens espaciais
            </Typography>
          </DivTitle>
         
          <ListTrips/>

        </ListTripsWrapper>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    getTrips: () => dispatch(getTrips()),
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ListTripsPage));