import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 40vw;
  min-height: 80vh;
  justify-content: center;
  
  @media screen and (max-device-width: 1200px){
  width: 90vw;
  }
`
