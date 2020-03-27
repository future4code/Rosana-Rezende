import styled from "styled-components";
import { Card } from '@material-ui/core'

export const DivCenter = styled.div`
    text-align: center;
`

export const DivCandidates = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CardCandidate = styled(Card)`
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.5rem;
    padding: 1rem 0.5rem;
    align-items: center;

    @media screen and (max-device-width: 1200px) {
        width: 35vw;
    }
    @media screen and (max-device-width: 800px) {
        width: 40vw;
    }
    @media screen and (max-device-width: 400px) {
        width: 70vw;
    }
`

export const styles = {
};
