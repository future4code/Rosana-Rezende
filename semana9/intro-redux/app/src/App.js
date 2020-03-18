import React from 'react';

import TaskHeader from './containers/TaskHeader';
import TaskList from './containers/TaskList';
import TaskFooter from './containers/TaskFooter';

import Paper from '@material-ui/core/Paper';

import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 70vw;
  margin: auto;

  @media screen and (max-device-width: 1200px) {
		max-width: 90vw;
	}
`

const Titulo = styled.h1`
  text-align: center;
  color: rgb(146, 1, 1);
  font-size: 5rem;

  @media screen and (max-device-width: 1200px) {
		font-size: 3rem;
	}
`

const PaperEstilizado = styled(Paper)`
  padding: 1rem;
`

function App() {
    return (
      <Wrapper>
        <Titulo>4Task</Titulo>
        <PaperEstilizado elevation={3}>
          <TaskHeader/>
          <TaskList/>
          <TaskFooter/>
        </PaperEstilizado>
      </Wrapper>
    );
}

export default App
