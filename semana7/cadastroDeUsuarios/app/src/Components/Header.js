import React, {Component} from 'react';

import styled from 'styled-components'
// import axios from 'axios'

const HeaderContainer = styled.div`
    height: 6vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.3);
`

const HeaderH1 = styled.h1`
    padding: 0;
    margin: 0;
    color: white;

    @media screen and (max-device-width: 800px) {
        font-size: 1.5rem;
    }

`

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <HeaderContainer>
          <HeaderH1>Sistema de Cadastro de Usuários</HeaderH1>
      </HeaderContainer>
    );
  }
}

export default Header;