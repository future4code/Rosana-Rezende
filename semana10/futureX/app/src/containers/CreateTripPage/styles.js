import styled from "styled-components";

export const DivContainer = styled.div`
  display: grid;
  min-height: 80vh;
  place-content: center;
  width: 80vw;
  margin: 2rem auto;
`;

export const CreateTripWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 1rem auto;
`;

export const styles = {
  grow: {
    flexGrow: 1,
  },
  logo: {
    cursor: 'pointer',
  },
  button: {
    width: 150,
    margin: 'auto',
    marginTop: 20,
  },
};