import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import styled from "styled-components";

import { routes } from '../Router'
import { decideCandidate, setTripDetail } from '../../actions'

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent } from '@material-ui/core'

import Appbar from "../../components/Appbar";

const TripDetailsWrapper = styled.div`
  display: grid;
  min-height: 80vh;
  place-content: center;
  width: 80vw;
  margin: 2rem auto;

  @media screen and (max-device-width: 1200px) {
		width: 90vw;
    margin: 1rem auto;
	}
`

const DivTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const DivCenter = styled.div`
  text-align: center;
`

const DivCandidates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CardCandidate = styled(Card)`
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 1rem 0.5rem;
  align-items: center;

  @media screen and (max-device-width: 1200px) {
		width: 35vw;
	}
  @media screen and (max-device-width: 800px) {
		width: 40vw;
	}
  @media screen and (max-device-width: 400px) {
		width: 70vw;
	}
`

const styles = {
};

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { goToLogin } = this.props
    const token = localStorage.getItem('token')
    if (token === null) {
      goToLogin() //redireciona pra login
    }
  }

  componentWillUnmount() {
    const { setTripDetail } = this.props
    setTripDetail()
  }

  render() {

    const { trip, decideCandidate } = this.props
    // console.log(trip)

    return (
      <>
        <Appbar page={'details'}/>
        
        {trip ? 
        <TripDetailsWrapper>
          <DivTitle>
            <Typography component="p" variant="h5" color="inherit">
              Detalhes da viagem <strong>{trip.name}</strong>
            </Typography>
          </DivTitle>

          <Typography component="p" variant="h6" color="inherit">
            <strong>Planeta: </strong>{trip.planet}
          </Typography>

          <Typography component="p" variant="h6" color="inherit">
            <strong>Data:</strong> {trip.date}
          </Typography>

          <Typography component="p" variant="h6" color="inherit">
            <strong>Duração:</strong> {trip.durationInDays} dias
        </Typography>

          <Typography component="p" variant="h6" color="inherit">
            <strong>Descrição:</strong> {trip.description}
          </Typography>

          {trip.approved && trip.approved.length > 0 ? 
           (<>
            <Typography component="p" variant="h6" color="inherit">
              <strong>Aprovados:</strong>
            </Typography>
            <DivCandidates>
            {trip.approved.map(candidate => (
                <CardCandidate key={candidate.id}>
                  <DivCenter>
                      <Typography variant="h5">{candidate.name}</Typography>
                    </DivCenter>
                  <CardContent>
                    <Typography><strong>Idade: </strong>{candidate.age} anos</Typography>
                    <Typography><strong>Profissão: </strong>{candidate.profession}</Typography>
                    <Typography><strong>País: </strong>{candidate.country}</Typography>
                    <Typography><strong>Texto de aplicação: </strong>{candidate.applicationText}</Typography>
                  </CardContent>
                  {/* <DivCenter>
                    <Button color="primary"
                      onClick={() => decideCandidate(trip.id, candidate.id)}>
                      Desaprovar
                    </Button>
                  </DivCenter> */}
                </CardCandidate>
            ))}
            </DivCandidates>
          </>)
          : 
          (<Typography component="p" variant="h6" color="inherit">
            <strong>Aprovados: </strong> Não há aprovados para essa viagem!
          </Typography>)
          }

          {trip.candidates && trip.candidates.length > 0 
          ?
            (<>
              <Typography component="p" variant="h6" color="inherit">
                <strong>Candidatos:</strong>
              </Typography>
              <DivCandidates>
              {trip.candidates.map(candidate => (
                  <CardCandidate key={candidate.id}>
                    <DivCenter>
                        <Typography variant="h5">{candidate.name}</Typography>
                      </DivCenter>
                    <CardContent>
                      <Typography><strong>Idade: </strong>{candidate.age} anos</Typography>
                      <Typography><strong>Profissão: </strong>{candidate.profession}</Typography>
                      <Typography><strong>País: </strong>{candidate.country}</Typography>
                      <Typography><strong>Texto de aplicação: </strong>{candidate.applicationText}</Typography>
                    </CardContent>
                    <DivCenter>
                      <Button color="primary"
                        onClick={() => decideCandidate(trip.id, candidate.id)}>
                        Aprovar
                      </Button>
                    </DivCenter>
                  </CardCandidate>
              ))}
              </DivCandidates>
            </>)
            :
            (<Typography component="p" variant="h6" color="inherit">
              <strong>Candidatos: </strong>Não há candidatos para essa viagem!
            </Typography>)
          }
        </TripDetailsWrapper>

        : 
        
        <TripDetailsWrapper>
          <Typography component="p" variant="h6" color="inherit">
            Carregando...
          </Typography>
        </TripDetailsWrapper>

        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  trip: state.trips.tripDetail,
})

const mapDispatchToProps = dispatch => {
  return {
    decideCandidate: (tripId, candidateId) => dispatch(decideCandidate(tripId, candidateId)),
    setTripDetail: (id) => dispatch(setTripDetail(id)),
    goToLogin: () => dispatch(push(routes.login)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TripDetailsPage));
