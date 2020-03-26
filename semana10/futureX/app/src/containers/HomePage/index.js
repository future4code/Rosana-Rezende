import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

import { routes } from '../Router'

const HomeWrapper = styled.div`
  width: 80vw;
  margin: auto;
  min-height: 90vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const DivTitle = styled.div`
  text-align: center;
  width: 50vw;

  @media screen and (max-device-width: 1200px) {
		width: 70vw;
	}
`

const Image = styled.img`
  margin: 2rem;
  width: 30vw;
  box-shadow: -3px 3px 2px #ccc;
  border-radius: 50%;

  @media screen and (max-device-width: 1200px) {
		width: 50vw;
	}
`

const styles = {
  grow: {
    flexGrow: 1,
  },
  button: {
    width: 150,
  }
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes, goToLogin, goToApllication } = this.props

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              FutureX
              </Typography>
            <Button color="inherit" onClick={goToLogin}>Login</Button>
          </Toolbar>
        </AppBar>

        <HomeWrapper>

          <DivTitle>
            <Typography variant="h5" color="inherit">
              Bem vindx ao <strong>FutureX</strong>
            </Typography>
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
    goToLogin: () => dispatch(push(routes.login)),
    goToApllication: () => dispatch(push(routes.application))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(HomePage));
