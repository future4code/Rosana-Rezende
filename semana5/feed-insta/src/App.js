import React from 'react';
import './App.css';

import Post from './Components/Post/Post';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">

      <Header/>

      <div className='espaço'></div>
      
      <Post 
        imagemPerfil={require('./img/menina1.png')}
        autor='casamenteira'
        imagemPost={require('./img/bouquet-2563485_1280.jpg')}
      />
      
      <Post
        imagemPerfil={require('./img/menino1.png')}
        autor='viajante_floresteiro'
        imagemPost={require('./img/uav-4605203_1280.jpg')}
      />

      <Post
        imagemPerfil={require('./img/menina2.png')}
        autor='praiana_de_boa'
        imagemPost={require('./img/bali-2698078_1280.jpg')}
      />
      
    </div>
  );
}

export default App;
