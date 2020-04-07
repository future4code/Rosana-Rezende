import styled from 'styled-components';
import { Button, Paper, Typography } from "@material-ui/core";


export const BoxCommentWrapper = styled(Paper)`
  margin: 1rem;
  padding: 0 1rem;
`

export const FormCreateComment = styled.form`
  display:flex;
  flex-direction: column;
`

export const ButtonStyled = styled(Button)`
  margin: 1rem auto;
`

export const TitleCreateComment = styled(Typography)`
  text-align:center;
  margin: 1rem;
`
