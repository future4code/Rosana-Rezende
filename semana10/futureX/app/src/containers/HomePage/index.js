import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core'

import { routes } from '../Router'
import Appbar from "../../components/Appbar";

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
    const { classes, goToApllication, user } = this.props
    const token = localStorage.getItem('token')
    // console.log(user) // tem id e email

    return (
      <>
        <Appbar page={'home'} token={token} />
        
        <HomeWrapper>

          <DivTitle>
            {token && user ? 
            (<Typography variant="h5" color="inherit" style={ {margin: '10px' }}>
              Bem vindx ao <strong>FutureX</strong> {token && user ? user.email : ""}
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

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => {
  return {
    goToHome: () => dispatch(push(routes.home)),
    goToApllication: () => dispatch(push(routes.application))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePage));
