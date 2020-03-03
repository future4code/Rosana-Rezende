import React from 'react';
import styled from 'styled-components'

import Header from './Components/Header';
import Main from './Components/Main';
import CriaTarefas from './Components/CriaTarefas';

const Container = styled.div`
  font-family: 'Merriweather', serif;
  color: #233d3d;
`

function App() {
  return (
    <Container>

      <Header />

      <Main>
        <CriaTarefas/>
      </Main>

    </Container>
  );
}

export default App;
