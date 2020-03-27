import styled from "styled-components";

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
