import React from 'react';
import styled from 'styled-components'

const ApareceTarefasContainer = styled.div`
    width: 40vw;
    margin: 0 auto;
`
const Li = styled.li`
    margin:auto;
`


class ApareceTarefas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <ApareceTarefasContainer>
              <Li>

              </Li>
      </ApareceTarefasContainer>
    )
  }
}

export default ApareceTarefas;
