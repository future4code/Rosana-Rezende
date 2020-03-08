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

export const Titulo = styled.span`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
`


export const P = styled.p``

export const P2 = styled.p`
    margin-bottom: 2rem;
`

export const Audio = styled.audio`
    outline: 0;
`

export const DivAddMusic = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const DivInterna = styled.div`
    margin: 1rem 0 2rem;
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 40%;
    margin: 0.5rem auto;
    border: none;
    border-radius: 10px;
    outline: 0;
    padding: 0.2rem;

    @media screen and (max-device-width: 1200px) {
        width: 80%;
    }
`

export const Botao = styled.button`
    width: 20%;
    margin: 1.5rem auto;
    background-color: #b8bfc2;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, .2);
    outline: 0;
    cursor: pointer;

    @media screen and (max-device-width: 1200px) {
        width: 40%;
    }
`

export const DivDetalheMusica = styled.div`
    margin-bottom: 2rem;
`

export const DivDelete = styled.div`
    /* text-align: center; */
    width: 60%;
    margin: 0 auto 0.2rem;
    display: flex;
    justify-content: center;

    @media screen and (max-device-width: 1200px) {
        width: 80%;
    }
`

export const Icone = styled.div`
    cursor: pointer;
    :hover {
        color:red;
    }
    width: 6%;
    max-width: 30px;
    margin-left: 0.2rem;
`

export const DivBotoes = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
    margin: 0 auto;
    @media screen and (max-device-width: 1200px) {
        width: 80%;
    }
`

export const Botao2 = styled.button`
    width: 40%;
    margin: 0.5rem auto;
    background-color: #b8bfc2;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, .2);
    outline: 0;
    cursor: pointer;

    @media screen and (max-device-width: 1200px) {
        width: 40%;
    }
`

export const Resposta = styled.div`
	margin-top: 2rem;
	text-align: center;
`