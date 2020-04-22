import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    background-color: #76c9ab;
    box-shadow: -2px 2px 8px rgb(118, 201, 171, 0.5);
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    @media screen and (max-device-width: 1200px) {
        padding: 0 0.5rem;
    }
`

export const DivBotoes = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-device-width: 1200px) {
        width: 72%;
    }
`

export const Botao = styled.button`
    width: 24%;
    margin: 0 auto;
    background-color: #b8bfc2;
    border: none;
    padding: 0.2rem 0.3rem;
    border-radius: 5px;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, .2);
    outline: 0;
    cursor: pointer;
    font-weight: 550;

    @media screen and (max-device-width: 1200px) {
        font-size: 0.6rem;
    }
`

export const DivMain = styled.div`
    margin: 2vh 1rem;
`
