import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #99d4c0;
    box-shadow: -1px 1px 4px rgba(118, 201, 171, 0.5);
    border-radius: 10px;
    padding: 1rem;
    min-height: 83vh;
    display: flex;
    flex-direction: column;
`

export const H2 = styled.h2`
    margin-bottom: 2rem;
    text-align: center;
`

export const Qtd = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
`

export const Playlist = styled.div`
    /* text-align: center; */
    width: 40%;
    margin: 0 auto 1rem;
    display: flex;
    justify-content: center;

    @media screen and (max-device-width: 1200px) {
        width: 60%;
    }
`

export const Nome = styled.span`
    cursor: pointer;
    font-weight: 600;
    :hover {
        color:blue;
    }
    padding-top: 0.2rem;
`

export const P = styled.p`
`

export const Icone = styled.div`
    cursor: pointer;
    :hover {
        color:red;
    }
    width: 8%;
    margin-left: 1rem;
`

export const Resposta = styled.div`
    margin-top: 2rem;
    text-align: center;
`
