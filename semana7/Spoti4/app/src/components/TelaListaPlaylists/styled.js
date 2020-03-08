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
    margin: 2rem 0 1rem;
    text-align: center;
`

export const Div = styled.div`
    margin-bottom: 1rem;
`

export const Input = styled.input`
    width: 25%;
    border: none;
    border-radius: 10px;
    outline: 0;
    padding: 0.5rem;

    @media screen and (max-device-width: 1200px) {
        width: 38%;
        margin: 0;
    }
`

export const Botao = styled.button`
    width: 15%;
    margin-left: 1rem;
    background-color: #b8bfc2;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, .2);
    outline: 0;
    cursor: pointer;

    @media screen and (max-device-width: 1200px) {
        width: 28%;
        margin-left: 0.5rem;
        font-size: 0.7rem;
    }
`

export const Qtd = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    max-width: 30px;
    margin-left: 1rem;
`

export const DivCarregando = styled.div`
    display: block;
    margin: 0 auto;
`

export const Resposta = styled.div`
    margin-top: 2rem;
    text-align: center;
`
