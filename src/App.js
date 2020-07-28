import React from 'react';
import BannerMain from './components/BannerMain'
import Carrosel from './components/Carousel'
import Footer from './components/Footer'
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json'

function App() {
  return (
    <div style={{background: "141414"}}>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área os termos HTMl, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carrosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carrosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carrosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carrosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carrosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carrosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
      
    </div>
  );
}

export default App;
