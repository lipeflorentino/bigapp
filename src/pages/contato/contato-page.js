// Importando o React
import React, { Component } from 'react';
        
// Importando o Component Navbar
import Menu from '../../component/navbar/navbar';       
import ContatoHeader from './component/ContatoHeader/contato-header';       
import ContatoContainer from './component/ContatoContainer/contato-container';       
import Footer from '../../component/footer-content/footer-socials/footer-socials';     
// Importando css
import './contato-page.scss';

import '../javascript/click-to-nav.js';

import Helmet from 'react-helmet';


class Contato extends Component {
  render() {
    return (
        <div id="contato-container">
            <Helmet>
              <title>Contato | BIG soluções digitais</title>
              <meta name="description" content="A BIG é uma empresa de TI de Niterói - RJ, especializada em soluções digitais para pequenas empresas, otimizamos nossos serviços para oferecer preços acessíveis e assim colocar sua empresa online."/>
            </Helmet>  
            <Menu />
            <ContatoHeader />
            <ContatoContainer />
            <Footer />
        </div>
    );
  }
}

export default Contato;