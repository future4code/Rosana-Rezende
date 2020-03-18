import React from 'react';

import TaskHeader from './components/TaskHeader';
import TaskList from './components/TaskList';
import TaskFooter from './components/TaskFooter';

import Paper from '@material-ui/core/Paper';

import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 80vh;
  margin: auto;
`

function App() {
    return (
      <Wrapper>
        <h1 className='centraliza-texto vermelho enorme'>4Task</h1>
        <Paper className='paper' elevation={3}>
          <TaskHeader/>
          <TaskList/>
          <TaskFooter/>
        </Paper>
      </Wrapper>
    );
}

export default App
