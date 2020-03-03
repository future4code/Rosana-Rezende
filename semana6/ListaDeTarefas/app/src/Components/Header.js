import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100vw;
    height: 6vh;
    background-color: #cfffff;
    border-bottom: 1px dotted #6ba0a0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`

function Header() {
  return (
    <HeaderContainer>
      <h1>Lista de Tarefas</h1>
    </HeaderContainer>
  );
}

export default Header;
