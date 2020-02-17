import React from 'react';
import styled from 'styled-components'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const Container = styled.div`
  color: #161b17;
`

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Container>

        <Header/>

        <Main>
          
        </Main>

      </Container>
    )
  }
}

export default App;
