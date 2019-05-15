// Importando o React
import React, { Component } from 'react';
        
// Importando o Component Navbar
import Menu from '../../component/navbar/navbar';       
import SistemasHeader from './component/SistemasHeader/sistemas-header';       
import SistemasContainer from './component/SistemasContainer/sistemas-container';       
import Footer from '../../component/footer-content/footer-socials/footer-socials';      
// Importando css
import './sistemas-page.scss';

import Helmet from 'react-helmet';

class Sistemas extends Component {
  render() {
    return (
        <div id="sistemas-container">
            <Helmet>
              <title>Criação de sistemas para pequenas empresas | BIG soluções digitais</title>
              <meta name="description" content="Quer gerenciar melhor o seu negócio? Um bom sistema de gestão é a solução. A BIG é uma empresa de TI de Niterói - RJ, especializada em soluções digitais para pequenas empresas, otimizamos nossos serviços para oferecer preços acessíveis e assim colocar sua empresa online."/>
            </Helmet>  
            <Menu />
            <SistemasHeader />
            <SistemasContainer />
            <Footer />
        </div>
    );
  }
}

export default Sistemas;