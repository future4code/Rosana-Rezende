import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #99d4c0;
    box-shadow: -1px 1px 4px rgba(118, 201, 171, 0.5);
    border-radius: 10px;
    padding: 1rem;
    min-height: 25rem;
    display: flex;
    flex-direction: column;
`

export const H2 = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
`

export const Qtd = styled.p`
    margin-bottom: 1rem;
`

export const Playlist = styled.div`
    text-align: center;
    width: 70%;
    margin: 0 auto 0.7rem;
    display: flex;
    justify-content: space-around;

    @media screen and (max-device-width: 1200px) {
        width: 80%;
    }
`

export const Nome = styled.span`
    cursor: pointer;
    font-weight: 600;
`

export const P = styled.p`
`

export const Icone = styled.div`
    cursor: pointer;
    :hover {
        color:red;
    }
    width: 5%;
`
