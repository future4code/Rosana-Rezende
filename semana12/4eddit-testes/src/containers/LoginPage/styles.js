import styled from 'styled-components';
import { Button, Typography } from "@material-ui/core";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 30vw;
  min-height: 80vh;
  justify-content: center;

  @media screen and (max-device-width: 1200px){
  width: 90vw;
  }
`

export const FormLogin = styled.form`
  display:flex;
  flex-direction: column;
`

export const ButtonStyled = styled(Button)`
  margin: 1rem auto;
  width: 150px;
`

export const RegisterWrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
`

export const WelcomeText = styled(Typography)`
  text-align: center;
`
