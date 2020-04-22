import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    background-color: #76c9ab;
    box-shadow: -2px 2px 8px rgb(118, 201, 171, 0.5);
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 700;
`

function Header(){
    return(
        <HeaderWrapper>
            <H1>Ideas for boring days</H1>
        </HeaderWrapper>
    )
}

export default Header
