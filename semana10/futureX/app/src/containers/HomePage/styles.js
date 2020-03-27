import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 80vw;
  margin: auto;
  min-height: 90vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

export const DivTitle = styled.div`
  text-align: center;
  width: 50vw;

  @media screen and (max-device-width: 1200px) {
		width: 70vw;
	}
`

export const Image = styled.img`
  margin: 2rem;
  width: 30vw;
  box-shadow: -3px 3px 2px #ccc;
  border-radius: 50%;

  @media screen and (max-device-width: 1200px) {
		width: 50vw;
	}
`

export const styles = {
  grow: {
    flexGrow: 1,
  },
  button: {
    width: 150,
  }
};