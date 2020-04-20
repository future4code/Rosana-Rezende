import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100vw;
    height: 6vh;
    background-color: #DFFFE7;
    border: 1px dotted #161b17;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`

const TituloHeader = styled.h1``

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <HeaderContainer>
          <TituloHeader>FutureForms</TituloHeader>
      </HeaderContainer>
    )
  }
}

export default Header;
