import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #99d4c0;
    box-shadow: -1px 1px 4px rgba(118, 201, 171, 0.5);
    border-radius: 10px;
    padding: 1rem;
    min-height: 83vh;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const H2 = styled.h2`
    margin-bottom: 2rem;
`

export const DivLogin = styled.div`
    text-align: right;
`

export const Div = styled.div`
    margin-bottom: 1rem;
`

export const Div2 = styled.div`
    margin: 0.5rem auto 0.5rem;
    max-width: 70%;
    @media screen and (max-device-width: 1200px) {
        max-width: 100%;
    }
`

export const Select = styled.select`
    width: 25%;
    border: none;
    border-radius: 10px;
    outline: 0;
    padding: 0.2rem;
    text-align-last:center;
    @media screen and (max-device-width: 800px) {
        width: 50%;
    }
`

export const Input = styled.input`
    width: 40%;
    border: none;
    border-radius: 10px;
    outline: 0;
    padding: 0.2rem 0.5rem;
    @media screen and (max-device-width: 1200px) {
        width: 60%;
    }
`

export const Botao = styled.button`
    width: 15%;
    margin-left: 0.5rem;
    background-color: #b8bfc2;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, .2);
    outline: 0;
    cursor: pointer;
    @media screen and (max-device-width: 1200px) {
        width: 30%;
    }
`

export const Botao2 = styled.button`
    width: 20%;
    margin-left: 0.5rem;
    background-color: #b8bfc2;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, .2);
    outline: 0;
    cursor: pointer;
    @media screen and (max-device-width: 1200px) {
        width: 30%;
    }
    @media screen and (max-device-width: 800px) {
        width: 40%;
    }
`

export const Audio = styled.audio`
    outline: 0;
`

export const Resposta = styled.div`
	text-align: center;
    margin: 1rem 0 1rem;
`