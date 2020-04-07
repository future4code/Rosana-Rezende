import styled from 'styled-components';
import { Card, CardContent, CardActions, Avatar } from "@material-ui/core";

export const CardPost = styled(Card)`
  margin: 1rem;
`

export const PostFooter = styled(CardContent)`
  display: flex;
  justify-content:space-between;
  align-items: center;
`

export const VotesWrapper = styled(CardActions)`
  padding: 0;
`

export const Image = styled.img`
  width: 100%
`

export const AvatarStyled = styled(Avatar)`
  background-color: rgba(163, 215, 255, 1);
`

export const Date = styled.span`
  font-style: italic;
  font-size: 12px;
  letter-spacing: 1px;
`

export const CardContentStyled = styled(CardContent)`
  padding-top: 0;
  padding-bottom: 0;
`