import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    <header>

      <section>
          <h2>FutureTube</h2>
      </section>

      <section>
          <input type="search" placeholder="Busca"/>
      </section>
    
    </header>

    <main role="main">

      <nav>
          <ul>
              <li><a href="index.html">Início</a></li>



              <li>Em alta</li>
              <li> Inscrições</li>
              <li>Originais</li>
          </ul>

          <ul>
              <li>Biblioteca</li>
              <li>Histórico</li>
              
          </ul>
      </nav>

      <section className="grade">
          
          <a href="video1.html" rel="noopener noreferrer"><article>
              <img src={require("./img/1.png")}  alt="imagem 1"/>
                
              <p>Media 1</p>
          </article></a>

          <a href="video2.html"><article>
              <img src={require("./img/2.png")} alt="imagem 2" />
              <p>Media 2</p>
          </article></a>

          <article>
              <img src={require("./img/3.png")} alt="imagem 3" />
              <p>Media 3</p>
          </article>

          <article>
              <img src={require("./img/4.png")} alt="imagem 4" />
              <p>Media 4</p>
          </article>

          <article>
              <img src={require("./img/5.png")} alt="imagem 5" />
              <p>Media 5</p>
          </article>

          <article>
              <img src={require("./img/6.png")} alt="imagem 6" />
              <p>Media 6</p>
          </article>

          <article>
              <img src={require("./img/7.png")} alt="imagem 7" />
              <p>Media 7</p>
          </article>

          <article>
              <img src={require("./img/8.png")} alt="imagem 8" />
              <p>Media 8</p>
          </article>        
      </section>

    </main>

    <footer>
      <h1>Oi! Eu moro no footer!</h1>
    </footer>
        
    </div>
  );
}

export default App;
