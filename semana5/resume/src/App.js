import React from 'react';
import './App.css';

import PageSection from './Components/PageSection/PageSection';
import BigCard from './Components/BigCard/BigCard';
import SmallCard from './Components/SmallCard/SmallCard';
import ImageButton from './Components/ImageButton/ImageButton';
import InnerCard from './Components/InnerCard/InnerCard';
import InnerCardContent from './Components/InnerCardContent/InnerCardContent';
import List from './Components/List/List';

function App() {
  return (
    <div className="App">

        <PageSection titulo='Dados pessoais'>

          <BigCard imagem={require('./img/rosana.jpg')} 
            subtitulo='Rosana Carolino Rezende' 
            linkExterno='Rô'
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
            linkExterno='Rosana Rezende Fotografia'
            texto='Atuação principal nas áreas empresarial, trabalhista 
            e consumerista, com recente especialização na área de direito 
            para Startups.'
            texto2='O foco de interesse na advocacia sempre foi entender as 
            demandas das pessoas e ajudá-las a encontrar soluções, além das 
            possibilidades de conexão que o direito proporciona, pois 
            conhecer pessoas e acompanhar transformação em tantas vidas 
            tem dado sentido a toda dedicação pessoal e profissional.'
          />

        <BigCard imagem={require('./img/fotografia.png')} 
            subtitulo='Fotógrafa' 
            linkExterno='Rosana Rezende Advocacia'
            texto='Um hobby que virou profissão e fez sair da zona de 
            conforto.'
            texto2='Encontrei na fotografia uma maneira singular de traduzir 
            algumas das minhas paixões: pessoas e arte. Amo brincar com a luz 
            e procurei revelar, a cada novo projeto, peculiaridades que 
            refletissem o que há de melhor nas pessoas por mim fotografadas, 
            com a expectativa de que cada um pudesse enxergar que o que o 
            torna único e diferente dos demais é também o que o torna especial.'
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

        <PageSection titulo='Formação'>

          <BigCard imagem={require('./img/f4.png')} 
              subtitulo='Web Full Stack'
              linkExterno='Future4'
              link='https://www.future4.com.br/'
              texto='2020 - Desenvolvimento de aplicações completas, incluindo 
              frontend Web com React e backend com Node.js.'
          />

          <BigCard imagem={require('./img/fgv.png')} 
              subtitulo='MBA em Gestão: Inteligência em Negócios Digitais'
              linkExterno='FGV'
              link='https://mmurad.com.br/cursos/pos-graduacao-mba/inteligencia-em-negocios-digitais/'
              texto='2019/2021 - Boas práticas das plataformas digitais, suas implicações 
              nas organizações e no comportamento dos consumidores.'
          />

          <BigCard imagem={require('./img/fgv.png')} 
              subtitulo='MBA em Direito e Processo do Trabalho' 
              linkExterno='FGV'
              link='https://mmurad.com.br/cursos/direito/trabalho-processo-trabalho/'
              texto='2018/2019 [trancado]'
          />

          <BigCard imagem={require('./img/uniderp.png')} 
              subtitulo='Pós-Graduação em Direito Constitucional, com formação para o Magistério Superior' 
              linkExterno='Uniderp'
              texto='2010/2011'
          />

          <BigCard imagem={require('./img/faceli.jpg')} 
              subtitulo='Bacharelado em Direito' 
              linkExterno='FACELI'
              link='http://faceli.edu.br/'
              texto='2005/2009'
          />

        </PageSection>

        <PageSection titulo='Cursos de Aperfeiçoamento'>

          <InnerCard titulo2='TECNOLOGIA'>

            <InnerCardContent subtitulo='Inteligência Artificial' 
              linkExterno='Hacking Health'
              link='xxx'
              texto='40h, 2019'/>

            <InnerCardContent subtitulo='Desenvolvedor Python' 
              linkExterno='Digital Innovation One'
              link='xxx'
              texto='50h, 2019'/>

            <InnerCardContent subtitulo='Desenvolvimento Híbrido' 
              linkExterno='Wize Company'
              link='xxx'
              texto='2019'/>

            <InnerCardContent subtitulo='Desenvolvimento de Chatbots' 
              linkExterno='Data Science Academy'
              link='xxx'
              texto='2019 [em andamento]'/>

            <InnerCardContent subtitulo='Fundamentos de Análise de Dados' 
              linkExterno='Udacity'
              link='xxx'
              texto='2019'/>

            <InnerCardContent subtitulo='Analista de Dados/Negócios' 
              linkExterno='Udacity'
              link='xxx'
              texto='2018/2019'/>

            <InnerCardContent subtitulo='Fundamentos de AI & Machine Learning' 
              linkExterno='Udacity'
              link='xxx'
              texto='2019'/>

            <InnerCardContent subtitulo='Data Scientist' 
              linkExterno='Udacity'
              link='xxx'
              texto='2018/2019'/>

            <InnerCardContent subtitulo='Machine Learning Engineer' 
              linkExterno='Udacity'
              link='xxx'
              texto='2018/2019'/>
            
          </InnerCard>

          <InnerCard titulo2='CRIATIVIDADE E INOVAÇÃO'>

            <InnerCardContent subtitulo='Creative Box' 
              linkExterno='ESSCA School of Management'
              link='xxx'
              texto='2019'/>

            <InnerCardContent subtitulo='The Five-Step Creative Process' 
              linkExterno='LinkedIn'
              link='xxx'
              texto='2019'/>
            
          </InnerCard>

          <InnerCard titulo2='DESENVOLVIMENTO PESSOAL'>

            <InnerCardContent subtitulo='Inteligência Emocional Na Prática' 
              linkExterno='Fundação Estudar'
              link='xxx'
              texto='16h, 2019'/>

            <InnerCardContent subtitulo='Facilitação Na Prática' 
              linkExterno='Fundação Estudar'
              link='xxx'
              texto='32h, 2019'/>

            <InnerCardContent subtitulo='Liderança Na Prática' 
              linkExterno='Fundação Estudar'
              link='xxx'
              texto='16h, 2019'/>

            <InnerCardContent subtitulo='Making Decisions' 
              linkExterno='LinkedIn'
              link='xxx'
              texto='2019'/>

            <InnerCardContent subtitulo='Mulheres na Liderança: 
            Desenvolvimento da Presença Executiva' 
              linkExterno='LinkedIn'
              link='xxx'
              texto='2019'/>

            <InnerCardContent subtitulo='Português e Redação' 
              linkExterno='Anhanguera Educacional'
              link='xxx'
              texto='110h, 2012'/>

            <InnerCardContent subtitulo='Oratória e Leitura Dinâmica' 
              linkExterno='UNILINHARES'
              link='xxx'
              texto='24h, 2007'/>
            
          </InnerCard>

          <InnerCard titulo2='JURÍDICOS'>

            <InnerCardContent subtitulo='Extensão em Direito Previdenciário' 
              linkExterno='FACELI'
              link='xxx'
              texto='2019'/>

            <InnerCardContent subtitulo='Direito Para Startups' 
              linkExterno='FGV'
              link='xxx'
              texto='30h, 2019'/>

            <InnerCardContent subtitulo='Carreiras jurídicas: Intensivo Anual' 
              linkExterno='Anhanguera Educacional'
              link='xxx'
              texto='882h, 2012'/>

            <InnerCardContent subtitulo='Direitos Humanos' 
              linkExterno='IPED'
              link='xxx'
              texto='120h, 2011/2012'/>

            <InnerCardContent subtitulo='Legislação Especial e Execução Penal' 
              linkExterno='Anhanguera Educacional'
              link='xxx'
              texto='130h, 2012'/>
            
          </InnerCard>

          <InnerCard titulo2='DIVERSOS'>

            <InnerCardContent subtitulo='UNV and Volunteerism' 
              linkExterno='United Nations Volunteers'
              link='xxx'
              texto='2019'/>
            
          </InnerCard>

        </PageSection>

        <PageSection titulo='Voluntariado'>

        <BigCard imagem={require('./img/alianca.png')} 
              subtitulo='Associada Nível II' 
              linkExterno='Aliança Jovem'
              link='https://www.instagram.com/alianca_jovem_adel/'
              texto='Instituto de formação intelectual de jovens lideranças empresariais
              com base na livre iniciativa, liberdade econômica e desenvolvimento
              social. Tem por missão incentivar o surgimento de lideranças
              empresariais comprometidas com o desenvolvimento econômico, social
              e político de Linhares e Região.'
          />

        <BigCard imagem={require('./img/estudar.jpg')} 
              subtitulo='Mentora de Voluntários' 
              linkExterno='Fundação Estudar'
              link='https://www.estudar.org.br/'
              texto='Uma das 100 melhores ONGs do Brasil, fundada por Jorge Paulo Lemann e seus sócios para apoiar a educação.'
          />
        <BigCard imagem={require('./img/un.jpg')} 
              subtitulo='Tradutora Voluntária' 
              linkExterno='United Nations Volunteers - UNV'
              link='xx'
              texto='Programa de voluntários promovido pela Organização das Nações Unidas para apoiar a paz e o
              desenvolvimento mundial.'
          />
        
        <BigCard imagem={require('./img/vamo.png')} 
              subtitulo='Voluntária' 
              linkExterno='Vale da Moqueca'
              link='https://www.instagram.com/valedamoqueca/'
              texto='Movimento empreendedor com a missão de fortalecer o ecossistema inovador capixaba! #VaMo'
          />

        </PageSection>

        <PageSection titulo='Habilidades'>

          <InnerCard titulo2='TÉCNICAS'>

            <h4 id='meuh4'>Linguagens de programação </h4>

              <List texto='Python'/>
              <List texto='HTML'/>
              <List texto='CSS'/>
              <List texto='JavaScript'/>
            
              <h4 id='meuh4'>Bibliotecas Mais Usadas </h4>

              <List texto='React'/>
              <List texto='Ionic'/>

            <h4 id='meuh4'>Ferramentas </h4>
              <List texto='Terminal'/>
              <List texto='Git Bash'/>
              <List texto='GitHub'/>
              <List texto='VSCode'/>
              <List texto='Pycharm'/>
              <List texto='Jupter Notebook'/>
              <List texto='Anaconda'/>
              <List texto='Postman'/>

          </InnerCard>

          <InnerCard titulo2='COMPORTAMENTAIS'>

            <List texto='Liderança'/>
            <List texto='Facilitação'/>
            <List texto='Inteligência Emocional'/>

          </InnerCard>

        </PageSection>
      
    </div>
  );
}

export default App;
