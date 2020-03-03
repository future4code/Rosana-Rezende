import React, {Component} from 'react';

import styled from 'styled-components'
// import axios from 'axios'

const HeaderContainer = styled.div`
    height: 6vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderH1 = styled.h1`
    padding: 0;
    margin: 0;
    color: white;
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