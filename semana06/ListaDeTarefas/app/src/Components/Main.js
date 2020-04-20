import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
    margin-top:6vh;
    background-color: #f0ffff;
    height: 90vh;
    padding: 2vh 2vw;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <MainContainer>
          {this.props.children}
      </MainContainer>
    )
  }
}

export default Main;
