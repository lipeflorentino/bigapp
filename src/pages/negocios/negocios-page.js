// Importando o React
import React, { Component } from 'react';
        
// Importando o Component Navbar
import Menu from '../../component/navbar/navbar';       
import NegociosHeader from './component/NegociosHeader/negocios-header';       
import NegociosContainer from './component/NegociosContainer/negocios-container';       
import Footer from '../../component/footer-content/footer-socials/footer-socials';     
// Importando css
import './negocios-page.scss';

import '../javascript/click-to-nav.js';

import Helmet from 'react-helmet';

class Negocios extends Component {
  render() {
    return (
        <div id="negocios-container">
            <Helmet>
              <title>Criação de negócios digitais para pequenas empresas e microempreendedores | BIG soluções digitais</title>
              <meta name="description" content="Tem uma ideia nova? Quer ganhar dinheiro com ela? A BIG é uma empresa de TI de Niterói - RJ, especializada em soluções digitais para pequenas empresas, otimizamos nossos serviços para oferecer preços acessíveis e assim colocar sua ideia online."/>
            </Helmet>  
            <Menu />
            <NegociosHeader />
            <NegociosContainer />
            <Footer />
        </div>
    );
  }
}

export default Negocios;