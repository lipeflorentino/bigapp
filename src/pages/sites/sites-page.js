// Importando o React
import React, { Component } from 'react';
        
// Importando o Component Navbar
import Menu from '../../component/navbar/navbar';       
import SiteHeader from './component/SiteHeader/site-header';       
import SiteContainer from './component/SiteContainer/site-container';       
import Footer from '../../component/footer-content/footer-socials/footer-socials';      
// Importando css
import './sites-page.scss';
import '../javascript/click-to-nav.js';

import Helmet from 'react-helmet';

class Site extends Component {
  render() {
    return (
        <div id="site-container">
            <Helmet>
              <title>Criação de sites para pequenas empresas | BIG soluções digitais</title>
              <meta name="description" content="Quer alavancar as suas vendas? Um bom website pode ajudá-lo. A BIG é uma empresa de TI de Niterói - RJ, especializada em soluções digitais para pequenas empresas, otimizamos nossos serviços para oferecer preços acessíveis e assim colocar sua empresa online."/>
            </Helmet>  
            <Menu />
            <SiteHeader />
            <SiteContainer />
            <Footer />
        </div>
    );
  }
}

export default Site;