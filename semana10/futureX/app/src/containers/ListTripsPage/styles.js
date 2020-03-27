import styled from "styled-components";
import { Card } from '@material-ui/core'


export const ListTripsWrapper = styled.div`
  display: grid;
  min-height: 80vh;
  place-content: center;
  width: 80vw;
  margin: 2rem auto;

  @media screen and (max-device-width: 1200px) {
		width: 90vw;
    margin: 1rem auto;
	}
`;

export const Trips = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardTrip = styled(Card)`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  align-items: center;

  @media screen and (max-device-width: 1200px) {
		width: 20vw;
	}
  @media screen and (max-device-width: 800px) {
		width: 25vw;
	}
  @media screen and (max-device-width: 600px) {
		width: 30vw;
	}
  @media screen and (max-device-width: 400px) {
		width: 40vw;
	}
`

export const DivTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

export const styles = {
  grow: {
    flexGrow: 1,
  },
  logo: {
    cursor: 'pointer',
  },
};
