import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core'

import { routes } from '../Router'
import Appbar from "../../components/Appbar";

import { DivTitle, HomeWrapper, Image, styles } from './styles'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes, goToApllication } = this.props
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    const newUserData = JSON.parse(userData)
    // console.log(userData)
    // console.log(newUserData)

    return (
      <>
        <Appbar page={'home'} token={token} />
        
        <HomeWrapper>

          <DivTitle>
            {userData ? 
            (<Typography variant="h5" color="inherit" style={ {margin: '10px' }}>
              Bem vindx ao <strong>FutureX</strong> <em>{newUserData.email}</em>
            </Typography>) 
            : 
            (<Typography variant="h5" color="inherit">
              Bem vindx ao <strong>FutureX</strong>
            </Typography>)
            }

            <Typography variant="h5" color="inherit">
              Encontre as melhores viagens espaciais!
            </Typography>
          </DivTitle>

          <Image src={'https://user-images.githubusercontent.com/45580434/77418220-5ddcbc00-6da5-11ea-9516-76b0d18b3813.png'} />

          <Typography variant="h6" color="inherit">
            Quer embarcar conosco?
            </Typography>

          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={goToApllication}
          >
            Formulário de aplicação
          </Button>
        </HomeWrapper>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToHome: () => dispatch(push(routes.home)),
    goToApllication: () => dispatch(push(routes.application))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(HomePage));
