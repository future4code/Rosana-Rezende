import styled from 'styled-components'
import { Paper, TextField, Button } from '@material-ui/core'

export const CreateTaskWrapper = styled(Paper)`
    margin: 1rem;
    padding: 0.5rem 3rem;

    @media screen and (max-width: 1200px){
        padding: 0.5rem;
    }
`

export const CreateTaskForm = styled.form`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 1200px){
        flex-wrap: wrap;
    }
`

export const TaskInput = styled(TextField)`
    width: 400px;
    @media screen and (max-width: 1200px){
        width: 95%;
    }
`

export const SelectDay = styled(TextField)`
    width: 200px;
`

export const ButtonStyled = styled(Button)`
`