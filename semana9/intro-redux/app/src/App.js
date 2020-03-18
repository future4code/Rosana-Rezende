import React from 'react';

import TaskHeader from './components/TaskHeader';
import TaskList from './components/TaskList';
import TaskFooter from './components/TaskFooter';

import Paper from '@material-ui/core/Paper';

import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 70vw;
  margin: auto;
`

const Titulo = styled.h1`
  text-align: center;
  color: rgb(146, 1, 1);
  font-size: 5rem;
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
