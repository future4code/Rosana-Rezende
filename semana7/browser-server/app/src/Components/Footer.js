import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    background-color: #76c9ab;
    box-shadow: -2px 2px 8px rgb(118, 201, 171, 0.5);
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    bottom: 0;
    width: 100%;
`

const P = styled.p`
    font-size: 1rem;
`

function Footer(){
    return(
        <FooterWrapper>
            <P>Develop by <a href='https://github.com/rosanarezende'>Rosana Rezende</a></P>
            <P>Using <a href='https://www.boredapi.com/documentation'>Bored API</a></P>
        </FooterWrapper>
    )
}

export default Footer
