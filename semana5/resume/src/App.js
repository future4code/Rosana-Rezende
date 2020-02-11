import React from 'react';
import './App.css';

import PageSection from './Components/PageSection/PageSection';
import BigCard from './Components/BigCard/BigCard';
import SmallCard from './Components/SmallCard/SmallCard';
import ImageButton from './Components/ImageButton/ImageButton';

function App() {
  return (
    <div className="App">

        <PageSection titulo='Dados pessoais'>

          <BigCard imagem={require('./img/rosana.jpg')} 
            subtitulo='Rosana Carolino Rezende' 
            texto='Sou Rosana Rezende, nasci em Vila Velha-ES, 
            mas morei até a adolescência na Bahia. 
            Hoje moro em Linhares-ES com meu amor, Cleiton.'
            texto2='Formei em Direito, advoguei por 9 anos na área 
            empresarial e há pouco mais de 1 ano embarquei em uma intensa 
            transição de carreira por ser apaixonada por tecnologia.'
          />

          <SmallCard imagem={require('./img/email.png')} 
            subtitulo='Email: ' 
            texto='rezende_rosana@hotmail.com'
          />

          <SmallCard imagem={require('./img/endereco.png')} 
            subtitulo='Endereço: ' 
            texto='Linhares/ES'
          />

          <ImageButton imagemPostOval={require('./img/vermais.png')}  
            textoPostOval='Ver Mais'
          />         

        </PageSection>

        <PageSection titulo='Experiências profissionais'>

        <BigCard imagem={require('./img/advocacia2.jpg')} 
            subtitulo='Advogada' 
            texto='Atuação principal nas áreas empresarial, trabalhista e consumerista, com recente especialização na área de direito para Startups.'
            texto2='O foco de interesse na advocacia sempre foi entender as demandas das pessoas e ajudá-las a encontrar soluções, além das possibilidades de conexão que o direito proporciona, pois conhecer pessoas e acompanhar transformação em tantas vidas tem dado sentido a toda dedicação pessoal e profissional.'
          />

        <BigCard imagem={require('./img/fotografia.png')} 
            subtitulo='Fotógrafa' 
            texto='Um hobby que virou profissão e fez sair da zona de conforto.'
            texto2='Encontrei na fotografia uma maneira singular de traduzir algumas das minhas paixões: pessoas e arte. Amo brincar com a luz e procurei revelar, a cada novo projeto, peculiaridades que refletissem o que há de melhor nas pessoas por mim fotografadas, com a expectativa de que cada um pudesse enxergar que o que o torna único e diferente dos demais é também o que o torna especial.'
        />

        </PageSection>

        <PageSection titulo='Minhas redes sociais'>

          <ImageButton imagemPostOval={require('./img/github.png')}  
            link='https://github.com/rosanarezende'
            textoPostOval='GitHub'
          />

          <ImageButton imagemPostOval={require('./img/in.png')}  
            link='https://www.linkedin.com/in/rosanarezende/'
            textoPostOval='LinkedIn'
          />

          <ImageButton imagemPostOval={require('./img/insta.png')}  
            link='https://www.instagram.com/rosanarezende_/'
            textoPostOval='Instagram'
          />

          <ImageButton imagemPostOval={require('./img/face.png')}  
            link='https://www.facebook.com/rosanarezende.oficial'
            textoPostOval='Facebook'
          />

        </PageSection>
      
    </div>
  );
}

export default App;
