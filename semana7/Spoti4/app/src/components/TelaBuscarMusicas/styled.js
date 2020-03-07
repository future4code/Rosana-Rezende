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
    margin: 2rem 0;
`

export const Div = styled.div`
    margin-bottom: 2rem;
`

// export const Select = styled.select`
//     width: 40%;
//     margin: 0.5rem auto;
//     border: none;
//     border-radius: 10px;
//     outline: 0;
//     padding: 0.2rem;
//     text-align-last:center;
//     @media screen and (max-device-width: 1200px) {
//         width: 80%;
//     }
// `

export const Input = styled.input`
    width: 30%;
    /* margin: 0.5rem auto; */
    border: none;
    border-radius: 10px;
    outline: 0;
    padding: 0.2rem;
    @media screen and (max-device-width: 1200px) {
        width: 60%;
    }
`

export const Botao = styled.button`
    width: 10%;
    margin-left: 0.5rem;
    background-color: #b8bfc2;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, .2);
    outline: 0;
    cursor: pointer;
    @media screen and (max-device-width: 1200px) {
        width: 20%;
    }
`

// export const Resposta = styled.div`
// 	margin-top: 2rem;
// 	text-align: center;
// `