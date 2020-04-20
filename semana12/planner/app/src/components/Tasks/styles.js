import styled from 'styled-components'
import { Card, CardContent } from '@material-ui/core'

export const TasksWrapper = styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const CardStyled = styled(Card)`
    width: 12vw;
    height: 72vh;
    @media screen and (max-width: 1200px) {
        width: 92vw;
        height: 30vh;
        margin-bottom: 1rem;
    }
`

export const WeekDay = styled(CardContent)`
    text-align: center;

    @media screen and (max-width: 1200px) {
        height: 7vh;
    }
`