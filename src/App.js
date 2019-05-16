// Importando o React
import React, { Component } from 'react';
        
// Importando o Component Navbar
import Menu from './component/navbar/navbar';        
// Importando o component Main
import Main from './main';
// Importando a barra lateral
import SideNav from './component/sidenav/sidenav';

import Helmet from 'react-helmet';


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Helmet>
              <title>Criação de sites, sistemas e negócios digitais para pequenas empresas | BIG soluções digitais</title>
              <meta name="description" content="Quer vender mais? Um site pode ajudá-lo. Quer gerenciar melhor o seu negócio? Um sistema é a solução. Tem uma ideia nova e quer ganhar dinheiro com ela? Podemos ajudá-lo. A BIG é uma empresa de TI de Niterói - RJ, especializada em soluções digitais para pequenas empresas com preços acessíveis."/>
        </Helmet>
        <Menu />
        <SideNav />
        <Main />
        <a href="https://wa.me/5522997461629&text=Olá!" className="h-float" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-whatsapp my-float"></i>
        </a>
      </div>
    );
  }
}

export default App;