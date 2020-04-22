import React from 'react';

import TaskHeader from './containers/TaskHeader';
import TaskList from './containers/TaskList';
import TaskFooter from './containers/TaskFooter';
import TaskAppBar from './containers/TaskAppBar';

import Paper from '@material-ui/core/Paper';

import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'

const Wrapper = styled.div`
  max-width: 70vw;
  margin: 3vh auto 0;

  @media screen and (max-device-width: 1200px) {
		max-width: 90vw;
	}
`

const PaperEstilizado = styled(Paper)`
  padding: 1rem;
`

const theme = createMuiTheme(
  // {"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"rgba(184, 233, 134, 1)","main":"rgba(126, 211, 33, 1)","dark":"rgba(65, 117, 5, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(187, 113, 252, 1)","main":"rgba(151, 42, 250, 1)","dark":"rgba(135, 3, 252, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}
)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <TaskAppBar />
      <Wrapper>
        <PaperEstilizado elevation={3}>
          <TaskHeader />
          <TaskList />
          <TaskFooter />
        </PaperEstilizado>
      </Wrapper>
      </MuiThemeProvider>
  );
}

export default App
