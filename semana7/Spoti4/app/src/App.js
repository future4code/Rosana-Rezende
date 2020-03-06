import React from 'react';

import * as S from './App-styled'

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {

  return (
    <>
      <Header />
      <S.Main>
        <Main />
      </S.Main>
      <Footer />
    </>
  )
}

export default App;
